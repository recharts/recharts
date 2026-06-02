import{R as t}from"./iframe-BOLHcnEq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-YubxuWa5.js";import{R as l}from"./zIndexSlice-C8kTqOmj.js";import{C as x}from"./ComposedChart-D7OPmIGY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CvLANxLU.js";import{L as a}from"./Line-Bcy1OQBu.js";import{X as c}from"./XAxis-C1WN-pkQ.js";import{T as g}from"./Tooltip-DaHSRJKc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Q7-QRRNs.js";import"./CartesianAxis-Cr_Ww8PH.js";import"./Layer-CuuZoUsG.js";import"./resolveDefaultProps-Z5NUUnaV.js";import"./Text-XHfzhZk8.js";import"./DOMUtils-D0co-hPv.js";import"./isWellBehavedNumber-wvIQrlfJ.js";import"./Label-DYMy2guT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNPe-074.js";import"./index-tgbEpTci.js";import"./index-D6CwE66r.js";import"./types-DPwewkdM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CxjdWKYi.js";import"./immer-CxjXtk_l.js";import"./RechartsWrapper-B7tC_WXo.js";import"./index-B1Z2mgyL.js";import"./index-CeNzyE2J.js";import"./axisSelectors-C8lj3akb.js";import"./d3-scale-C1j7mBel.js";import"./CartesianChart-BmPupl9-.js";import"./chartDataContext-C7_PfxRX.js";import"./CategoricalChart-Ytc03f7l.js";import"./tooltipContext-z17QOzFZ.js";import"./ReactUtils-8Czxn-Uo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-yS7V0F_a.js";import"./useAnimationId-BckTdhqG.js";import"./ActiveShapeUtils-DWIyzqt2.js";import"./RegisterGraphicalItemId-f9q-fu78.js";import"./ErrorBarContext-C3dgZsKy.js";import"./GraphicalItemClipPath--wTpErch.js";import"./SetGraphicalItem-D2UHcxYS.js";import"./getZIndexFromUnknown-D1n9bhRw.js";import"./graphicalItemSelectors-DGMwM8cu.js";import"./Curve-Bqb8d6oT.js";import"./step-ClQLV_9Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D1Ow9Sb1.js";import"./Dot-CFAalLdL.js";import"./getRadiusAndStrokeWidthFromDot-Uv4j9P_J.js";import"./useElementOffset-D1RkL54t.js";import"./uniqBy-CBDL8fXr.js";import"./iteratee-BYmccGUz.js";import"./Cross-Bld8WcL6.js";import"./Sector-BV3FjY9s.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
