import{R as t}from"./iframe-DVB9NpZr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CIOeYwaY.js";import{R as l}from"./zIndexSlice-inUr0xCU.js";import{C as x}from"./ComposedChart-oQ-te1DN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWAOVqf3.js";import{L as a}from"./Line-DLH78_Xg.js";import{X as c}from"./XAxis-CjffC60d.js";import{T as g}from"./Tooltip-DvsPMFHN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DFBBhs2u.js";import"./CartesianAxis-BFFWpUHq.js";import"./Layer-CznYhS6e.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./Label-C-9e4xzc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YpWmKYVa.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./types-CmHpCyOi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJczlu3R.js";import"./immer-cUFuezMs.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./tooltipContext-DgkZ29eX.js";import"./AnimatedItems-DN0vzfw4.js";import"./useAnimationId-D_d0Diy_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eOEMHMNE.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./ErrorBarContext-C6AudozV.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getZIndexFromUnknown-Dnn9JAxK.js";import"./graphicalItemSelectors-C16TioBL.js";import"./Curve-Ct2rphZk.js";import"./step-CVw2yAQM.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B3oYHQTk.js";import"./Dot-EUv2v8ot.js";import"./getRadiusAndStrokeWidthFromDot-CSFUoSlb.js";import"./useElementOffset-BXbw_jYn.js";import"./uniqBy-DDqwjX8c.js";import"./iteratee-DxauXe4m.js";import"./Cross-CRWYoA5L.js";import"./Sector-ByTnutuv.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
