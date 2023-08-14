import { StorybookTest } from "@engi.network/design-matcher/src/types";

describe("Button designs", () => {
  test("big, primary, disabled", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/big-primary-disabled.png",
      args: {
        size: 'big',
        variant: 'primary',
        disabled: true,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("big, primary, normal", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/big-primary-normal.png",
      args: {
        size: 'big',
        variant: 'primary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("big, secondary, disabled", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/big-secondary-disabled.png",
      args: {
        size: 'big',
        variant: 'secondary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("big, secondary, normal", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/big-secondary-normal.png",
      args: {
        size: 'big',
        variant: 'secondary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  
  test("medium, primary, disabled", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/medium-primary-disabled.png",
      args: {
        size: 'medium',
        variant: 'primary',
        disabled: true,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("medium, primary, normal", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/medium-primary-normal.png",
      args: {
        size: 'medium',
        variant: 'primary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("medium, secondary, disabled", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/medium-secondary-disabled.png",
      args: {
        size: 'medium',
        variant: 'secondary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("medium, secondary, normal", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/medium-secondary-normal.png",
      args: {
        size: 'medium',
        variant: 'secondary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });

  test("small, primary, disabled", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/small-primary-disabled.png",
      args: {
        size: 'small',
        variant: 'primary',
        disabled: true,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("small, primary, normal", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/small-primary-normal.png",
      args: {
        size: 'small',
        variant: 'primary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("small, secondary, disabled", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/small-secondary-disabled.png",
      args: {
        size: 'small',
        variant: 'secondary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
  test("small, secondary, normal", async () => {
    const designTest: StorybookTest = {
      component: "Button",
      story: "Default",
      design: "designs/small-secondary-normal.png",
      args: {
        size: 'small',
        variant: 'secondary',
        disabled: false,
      }
    };
    await expect(designTest).toMatchDesign();
  });
});
