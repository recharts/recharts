import{e}from"./iframe-DmHHE4lP.js";import{g as d}from"./utils-ePvtT4un.js";import{B as n}from"./Brush-BuDAkM_Z.js";import{R as p}from"./arrayEqualityCheck-t0Foyoao.js";import{C as r}from"./ComposedChart-6GwosE_U.js";import{L as y}from"./Line-DOsGA7cb.js";import{R as h}from"./RechartsHookInspector-BtHYkDer.js";import{T as F}from"./Tooltip-uUUOr1QD.js";import{A as f}from"./Area-C9L46kbX.js";import{B as b}from"./Bar-C6ldBGSs.js";import{S as C}from"./ScatterChart-BCMGI_F5.js";import{S as v}from"./Scatter-BjECKBdK.js";import{p as a}from"./Page-DPte-9pC.js";const{fireEvent:g,within:L,expect:k}=__STORYBOOK_MODULE_TEST__,o={ariaLabel:{description:"The ARIA label of the brush.",table:{type:{summary:"string"},category:"General"}},dataKey:{description:"The key of data displayed in Brush.",table:{type:{summary:"string | number | Function"},category:"General"}},x:{description:"The x-coordinate of brush.",table:{type:{summary:"number"},category:"General"}},y:{description:"The y-coordinate of brush.",table:{type:{summary:"number"},category:"General"}},dy:{description:"Indicates a shift along the y-axis on the position of the Brush and its content.",table:{type:{summary:"number"},category:"General"}},width:{description:"The width of brush.",table:{type:{summary:"number"},category:"General"}},height:{description:"The height of brush.",table:{type:{summary:"number"},category:"General"},defaultValue:40},travellerWidth:{description:"The width of each traveller.",table:{type:{summary:"number"},category:"General"},defaultValue:5},gap:{description:`The data with gap of refreshing chart. If the option is not set,
    the chart will be refreshed every time.`,table:{type:{summary:"number"},category:"General"},defaultValue:1},fill:{description:"Fill color",table:{type:{summary:"string"},category:"SVG properties"},defaultValue:"#ccc"},startIndex:{description:"The default start index of brush. If the option is not set, the start index will be 0.",table:{type:{summary:"number"},category:"General"}},endIndex:{description:`The default end index of brush. If the option is not set,
    the end index will be calculated by the length of data`,table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"Function"},category:"General"}},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"Function"},category:"Event handlers"}},onDragEnd:{description:"The handler of ending the brush drag.",table:{type:{summary:"Function"},category:"Event handlers"}},alwaysShowText:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"},defaultValue:!1}},W={component:n,argTypes:o},s={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...t}),e.createElement(h,null))),args:d(o),play:async({canvasElement:t})=>{const u=(await L(t).findAllByRole("slider"))[0];k(u).toBeTruthy(),g.mouseDown(u),g.mouseMove(u,{clientX:200}),g.mouseUp(u)}},i={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(F,null),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)},c={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)},l={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(b,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(b,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)},m={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(C,{data:a},e.createElement(v,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(C,{data:a},e.createElement(v,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)};var E,S,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Brush {...args} />
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(GeneralProps),
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const slider = await canvas.findAllByRole('slider');
    const leftSlider = slider[0];
    expect(leftSlider).toBeTruthy();
    fireEvent.mouseDown(leftSlider);
    fireEvent.mouseMove(leftSlider, {
      clientX: 200
    });
    fireEvent.mouseUp(leftSlider);
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,w,B;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Tooltip />
        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(GeneralProps)
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var R,G,K;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(GeneralProps)
}`,...(K=(G=c.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,I,x;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(GeneralProps)
}`,...(x=(I=l.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var D,O,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
        <RechartsHookInspector />
      </ScatterChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(GeneralProps)
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const j=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"],ae=Object.freeze(Object.defineProperty({__proto__:null,API:s,PanoramaWithArea:c,PanoramaWithBar:l,PanoramaWithLine:i,PanoramaWithScatter:m,__namedExportsOrder:j,default:W},Symbol.toStringTag,{value:"Module"}));export{s as A,ae as C};
