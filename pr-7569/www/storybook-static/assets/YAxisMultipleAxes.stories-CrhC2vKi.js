import{R as t}from"./iframe-3EJ0a-7l.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DWgMRUiY.js";import{R as l}from"./zIndexSlice-c2FXiYNl.js";import{C as x}from"./ComposedChart-D-953FuV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4WXwf4mw.js";import{L as a}from"./Line-C2MKmrJp.js";import{X as c}from"./XAxis-C3QGe7ZQ.js";import{T as g}from"./Tooltip-w5RIzRlq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bfa5m128.js";import"./Layer-DpkyIzcZ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./Label-C0w-bdKA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DNvDkown.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./types-CU0G9DUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gv74no8c.js";import"./throttle-CPX4UzZG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./CategoricalChart-CxrO1b6T.js";import"./tooltipContext-DYh9IZNi.js";import"./AnimatedItems-_aFnnDci.js";import"./useAnimationId-BfMO6PtV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVPfCn-u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getZIndexFromUnknown-BG6YC5Um.js";import"./graphicalItemSelectors-B05IV_cU.js";import"./Curve-BO7dzXGY.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DJDGdwM2.js";import"./Dot-Cv5hb360.js";import"./getRadiusAndStrokeWidthFromDot-Ds3sY1DQ.js";import"./useElementOffset-9xxsp0Py.js";import"./uniqBy-CgpcgpAe.js";import"./iteratee-CsQVFiVH.js";import"./Cross-DMbiAaWb.js";import"./Sector-DYvV7H0n.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
