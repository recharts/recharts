import{R as t}from"./iframe-RDkqVuG2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-4GVW-TXE.js";import{R as l}from"./zIndexSlice-C4ZKGTQh.js";import{C as x}from"./ComposedChart-n_pkeOwP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BYU8vxI_.js";import{L as a}from"./Line-DDxM7FUn.js";import{X as c}from"./XAxis-DEACd4mi.js";import{T as g}from"./Tooltip-BW-vO3rG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-qTOI2Rj3.js";import"./CartesianAxis-BXGLIO05.js";import"./Layer-DnJxeL60.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./Label-kl9r3lv0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChplAtHB.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./types-BwJsYmye.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./immer-tJ0TJl6x.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./tooltipContext-CKhyGnG7.js";import"./AnimatedItems-wlRh2tbg.js";import"./useAnimationId-DWgEGQGL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cf0Ils5n.js";import"./ActiveShapeUtils-BGYROLTx.js";import"./RegisterGraphicalItemId-BjCxIzIU.js";import"./ErrorBarContext-DhtRtcJb.js";import"./GraphicalItemClipPath-fh46Mv1_.js";import"./SetGraphicalItem-C_Bitdri.js";import"./getZIndexFromUnknown-D8aFDo5v.js";import"./graphicalItemSelectors-_gyjbiax.js";import"./Curve-Um8FGkl9.js";import"./step-23ddn8am.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C4TTqOg4.js";import"./Dot-Dlo4cfNs.js";import"./getRadiusAndStrokeWidthFromDot-ClHmJg6B.js";import"./useElementOffset-BgGPf32V.js";import"./uniqBy-CGyhlrqZ.js";import"./iteratee-gpO3rR4q.js";import"./Cross-DxWvGC7P.js";import"./Sector-DZWVUbC3.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
