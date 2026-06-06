import{R as t}from"./iframe-Cx28kabR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DtGVJOoG.js";import{R as l}from"./zIndexSlice-BJophbSs.js";import{C as x}from"./ComposedChart-Dhi_mSXs.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CmGNw5-h.js";import{L as a}from"./Line-Cn1MCW6C.js";import{X as c}from"./XAxis-CWTUtLan.js";import{T as g}from"./Tooltip-BKDHWttE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B9lrw7-x.js";import"./CartesianAxis-BKywCzO2.js";import"./Layer-DvLhXWX-.js";import"./resolveDefaultProps-DKQmb89J.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./Label-BDMWILCu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZAm4j4p.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./types-UeNFcMv5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./immer-C9z4Tvb1.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./tooltipContext-Bexp3cQ9.js";import"./AnimatedItems-BxtLfWI4.js";import"./useAnimationId-DLl-Zvtm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DJiMJWXy.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getZIndexFromUnknown-B2_utusi.js";import"./graphicalItemSelectors-DpikqHET.js";import"./Curve-BhQA-w3U.js";import"./step-JKjbkiwo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bq-7Nh5y.js";import"./Dot-Iy9OPdn2.js";import"./getRadiusAndStrokeWidthFromDot-pD6-2pnW.js";import"./useElementOffset-C1Lt73IJ.js";import"./uniqBy-1qQJ4H2D.js";import"./iteratee-8IZU8Gil.js";import"./Cross-3dBm2aFN.js";import"./Sector-CCXsbnI5.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
