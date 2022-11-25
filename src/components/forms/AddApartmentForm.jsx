import React from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { defaultValues } from "../../data/data";
import { apartmentOptions } from "../../data/data";
import { postApartment } from "../../data/api/apartmentApi/fetchAllApartments";
import axios from "axios";

import "./forms.css";

function AddApartmentForm() {
  const { isLoading, isError, mutateAsync, mutate } = useMutation(postApartment);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(defaultValues);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  isError && <h2>This { error.message} is encountered. Please, try again!</h2>

  return (
    <div className="form-container add-apartment__container">
      <h2>Apartment's Sign-up Page</h2>
      <h4>
        Fill in all apartment details. They are captured for clients to make
        informed choices to make payment. So upload all detailed image of the
        apartment.
      </h4>
      <form onSubmit={handleSubmit(mutate)}>
        <fieldset>
          <legend>APARTMENT DETAILS</legend>
          <div className="apartment-field">
            <input
              type="text"
              className="input"
              placeholder="Owner's Full Name"
              name="owner"
              {...register("owner")}
            />
            <small className="text-danger">
              {errors?.name && errors.owner.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              placeholder="Number Of Rooms"
              name="noOfRooms"
              {...register("noOfRooms")}
            />
            <small className="text-danger">
              {errors?.name && errors.noOfRooms.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              placeholder="Number Of Sitting Rooms"
              name="noOfSittingRooms"
              {...register("noOfSittingRooms")}
            />
            <small className="text-danger">
              {errors?.name && errors.noOfSittingRooms.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              placeholder="Number Of Toilets"
              name="noOfToilets"
              {...register("noOfToilets")}
            />
            <small className="text-danger">
              {errors?.name && errors.noOfToilets.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              placeholder="Number of Wardropes"
              name="noOfWardropes"
              {...register("noOfWardropes")}
            />
            <small className="text-danger">
              {errors?.name && errors.noOfWardropes.message}
            </small>
          </div>

          <div className="apartment-field">
            <label>Is this an estate apartment?</label>
            <select className="dropdown-list" {...register("estateResidence")}>
              <option value="">Estate Residence</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <small className="text-danger">
              {errors?.name && errors.estateResidence.message}
            </small>
          </div>

          <div className="apartment-field">
            <label>how many hours of electricity?</label>
            <select
              className="dropdown-list"
              {...register("hoursOfElectricity")}
            >
              <option value="">Hours Of Electricity</option>
              <option value="0">0</option>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
            <small className="text-danger">
              {errors?.name && errors.hoursOfElectricity.message}
            </small>
          </div>

          <div className="apartment-field">
            <label>How many hour of constant water suppy?</label>
            <select className="dropdown-list" {...register("hoursOfWater")}>
              <option value="">Hours Of Water Supply</option>
              <option value="0">0</option>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
            <small className="text-danger">
              {errors?.name && errors.hoursOfWater.message}
            </small>
          </div>
        </fieldset>

        <fieldset>
          <legend>Price(N)</legend>
          <div className="apartment-field">
            <input
              type="number"
              className="input"
              placeholder="Price"
              name="amount"
              {...register("amount")}
            />
            <small className="text-danger">
              {errors?.name && errors.amount.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="number"
              className="input"
              placeholder="Agency Fee"
              name="agencyFee"
              {...register("agencyFee")}
            />
            <small className="text-danger">
              {errors?.name && errors.agencyFee.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="number"
              className="input"
              placeholder="Commission"
              name="commision"
              {...register("commission")}
            />
            <small className="text-danger">
              {errors?.name && errors.commision.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="number"
              className="input"
              placeholder="Other Fees"
              name="otherFee"
              {...register("otherFee")}
            />
            <small className="text-danger">
              {errors?.name && errors.otherFee.message}
            </small>
          </div>
        </fieldset>

        <fieldset>
          <label>What type of apartment type are you posting?</label>
          <div className="apartment-field">
            <select className="dropdown-list" {...register("apartmentType")}>
              <option value="">Apartment Type</option>
              <option value="ONE_ROOM">ONE_ROOM</option>
              <option value="STUDIO_APARTMENT">STUDIO_APARTMENT</option>
              <option value="STORE_APARTMENT">STORE_APARTMENT</option>
              <option value="ONE_ROOM_SELF_CONTAIN">
                ONE_ROOM_SELF_CONTAIN
              </option>
              <option value="ONE_ROOM_AND_PARLOUR_SELF_CONTAIN">
                ONE_ROOM_AND_PARLOUR_SELF_CONTAIN
              </option>
              <option value="TWO_BEDROOM_FLAT">TWO BEDROOM FLAT</option>
              <option value="THREE_BEDROOM_FLAT">THREE BEDROOM FLAT</option>
              <option value="FOUR_BEDROOM_FLAT">FOUR BEDROOM FLAT</option>
              <option value="FIVE_BEDROOM_FLAT">FIVE BEDROOM FLAT</option>
              <option value="SIX_BEDROOM_FLAT">SIX BEDROOM FLAT</option>
            </select>
            <small className="text-danger">
              {errors?.name && errors.apartmentType.message}
            </small>
          </div>
        </fieldset>

        <fieldset>
          <label>Is the apartment for sale, rent, estate and serviced?</label>
          <div className="apartment-field">
            <select className="dropdown-list" {...register("forRent")}>
              <option value="">For Rent</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <small className="text-danger">
              {errors?.name && errors.status.message}
            </small>
          </div>

          <div className="apartment-field">
            <label>Is this apartment a serviced?</label>
            <select className="dropdown-list" {...register("serviced")}>
              <option value="">Serviced</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <small className="text-danger">
              {errors?.name && errors.serviced.message}
            </small>
          </div>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="flatNo"
              placeholder="Flat No"
              {...register("flatNo")}
            />
            <small className="text-danger">
              {errors?.name && errors.flatNo.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="street"
              placeholder="Street"
              {...register("street")}
            />
            <small className="text-danger">
              {errors?.name && errors.street.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="nearestJunction"
              placeholder="Nearest Junction"
              {...register("nearestJunction")}
            />
            <small className="text-danger">
              {errors?.name && errors.nearestJunction.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="estate"
              placeholder="Estate"
              {...register("estate")}
            />
            <small className="text-danger">
              {errors?.name && errors.estate.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="city"
              placeholder="City"
              {...register("city")}
            />
            <small className="text-danger">
              {errors?.name && errors.city.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="flatNo"
              placeholder="lga"
              {...register("lga")}
            />
            <small className="text-danger">
              {errors?.name && errors.lga.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="state"
              placeholder="state"
              {...register("state")}
            />
            <small className="text-danger">
              {errors?.name && errors.state.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="country"
              placeholder="country"
              {...register("country")}
            />
            <small className="text-danger">
              {errors?.name && errors.country.message}
            </small>
          </div>

          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="location"
              placeholder="location"
              {...register("location")}
            />
            <small className="text-danger">
              {errors?.name && errors.location.message}
            </small>
          </div>
        </fieldset>

        <fieldset>
          <label>Add More information</label>
          <div className="apartment-field">
            <input
              type="text"
              className="input"
              name="info"
              placeholder="Extra information"
              {...register("info")}
            />
            <small className="text-danger">
              {errors?.name && errors.info.message}
            </small>
          </div>
        </fieldset>

        <fieldset>
          <label>Upload Images (8)</label>
          <div className="apartment-field">
            <input
              type="file"
              className="input"
              name="images"
              placeholder="Upload Images (8)"
              multiple
              {...register("images")}
            />
            <small className="text-danger">
              {errors?.name && errors.images.message}
            </small>
          </div>
        </fieldset>
        <button>Add Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentForm;
