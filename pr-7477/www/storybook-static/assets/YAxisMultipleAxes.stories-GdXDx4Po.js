import{R as t}from"./iframe-DiQxFPiD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Djww7T90.js";import{R as l}from"./zIndexSlice-CbAjIrOk.js";import{C as x}from"./ComposedChart-CxyGmExL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-m27dEZDY.js";import{L as a}from"./Line-sGvSTEOh.js";import{X as c}from"./XAxis-EdXvGrQH.js";import{T as g}from"./Tooltip-CjyLpcR8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dz6QpTIZ.js";import"./CartesianAxis-BIrMP5Fh.js";import"./Layer-DW7oRwXF.js";import"./resolveDefaultProps-BZylAH88.js";import"./Text-BktdaDV_.js";import"./DOMUtils-C48HdCx5.js";import"./isWellBehavedNumber-BHg_3JmY.js";import"./Label-DzhDJono.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CyWmE1eJ.js";import"./index-gf7fYE_b.js";import"./index-B_6w02dr.js";import"./types-3xORkcTs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CVnOD3jK.js";import"./immer-DosMXF92.js";import"./RechartsWrapper-BvKHUawi.js";import"./index-DEHTfYnV.js";import"./index-DXMpEhi9.js";import"./axisSelectors-BmcnLQg7.js";import"./d3-scale-DQujxaME.js";import"./CartesianChart-j347tMAF.js";import"./chartDataContext-sNW_KTv-.js";import"./CategoricalChart-1umVaoo6.js";import"./tooltipContext-B6oBBa3A.js";import"./AnimatedItems-BWXZdjgl.js";import"./useAnimationId-BBPLHSdH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3N5fext.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPs_mOyJ.js";import"./RegisterGraphicalItemId-CwapTkk7.js";import"./ErrorBarContext-CkyyD-i0.js";import"./GraphicalItemClipPath-B5HruHls.js";import"./SetGraphicalItem-glSzG2Ws.js";import"./getZIndexFromUnknown-C03jEVLP.js";import"./graphicalItemSelectors-CpR8p2s9.js";import"./Curve-B6Y4ZTmR.js";import"./step-C72WQite.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CDvTrnjr.js";import"./Dot-DDdvkJOK.js";import"./getRadiusAndStrokeWidthFromDot-lcmD8n15.js";import"./useElementOffset-BvonADWO.js";import"./uniqBy-BRng3TIU.js";import"./iteratee-BdJ_-fKl.js";import"./Cross-B7agATyv.js";import"./Sector-ad7jNoc1.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
