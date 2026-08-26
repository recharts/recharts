import{R as t}from"./iframe-Czcj7Ej5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BrgBYt1o.js";import{R as l}from"./zIndexSlice-CKivF8h7.js";import{C as x}from"./ComposedChart-BkinsCpZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BIR95sOX.js";import{L as a}from"./Line-DqJpKjIv.js";import{X as c}from"./XAxis-BDziZgbX.js";import{T as g}from"./Tooltip-DkrV1jqM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-OqXB0-3Q.js";import"./Text-BN2m7we3.js";import"./resolveDefaultProps-8BNEdWXX.js";import"./DOMUtils-CVT-c_43.js";import"./isWellBehavedNumber-Dco4JHSd.js";import"./useId-3K3eUDJ4.js";import"./useBackwardsCompatibleTheme-BpiBN5I0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CF-iLGvZ.js";import"./index-DMWmOMbl.js";import"./index-B91NvUo7.js";import"./RechartsWrapper-CDYHtUJT.js";import"./axisSelectors-BeEA7IYF.js";import"./throttle-BVmZUzar.js";import"./d3-scale-BQoi7yt5.js";import"./index-B0JfwGdu.js";import"./index-Bxr1sCFD.js";import"./renderedTicksSlice-CbrcSGbF.js";import"./index-CFVWldzh.js";import"./CartesianAxis-DqwYXNcz.js";import"./Layer-2POOn5CI.js";import"./types-CjYnj8ko.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dv6L8FEP.js";import"./chartDataContext-Bk1K2XnM.js";import"./CategoricalChart-Du7LZMoH.js";import"./AnimatedItems-B6csDPia.js";import"./useAnimationId-_fI9jCE-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrGaLjNe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C-4luYKV.js";import"./tooltipContext-Di9UKZqK.js";import"./RegisterGraphicalItemId-DZFxFD16.js";import"./ErrorBarContext-BTb3p3NR.js";import"./GraphicalItemClipPath-BePsYx1e.js";import"./SetGraphicalItem-CX4EE90C.js";import"./getZIndexFromUnknown-CDCmXySr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CvRtM1fn.js";import"./Curve-BM-kcMMV.js";import"./step-hNno3B0H.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BVCg7sLW.js";import"./Dot-Cx9jlkw_.js";import"./getRadiusAndStrokeWidthFromDot-FqqM7_gr.js";import"./useElementOffset-49EfHLgl.js";import"./uniqBy-FrwGGnBN.js";import"./iteratee-CKwCJVNt.js";import"./Cross-CNxTD_8i.js";import"./Sector-kN5zdx9N.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
