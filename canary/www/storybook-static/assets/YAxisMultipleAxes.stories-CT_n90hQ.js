import{R as t}from"./iframe-Dv5VASSf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CgS9V_Pe.js";import{R as l}from"./zIndexSlice-CM9TsEF-.js";import{C as x}from"./ComposedChart-CkKDXzJX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CfZeXqO6.js";import{L as a}from"./Line-D9tGWa1P.js";import{X as c}from"./XAxis-DxRbB3rx.js";import{T as g}from"./Tooltip-BxYunMJ1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bs09YXrP.js";import"./CartesianAxis-UbDtFbfy.js";import"./Layer-LJvjQizz.js";import"./resolveDefaultProps-Bff0INFN.js";import"./Text-Dd7f7n_i.js";import"./DOMUtils-DlL30Y-Y.js";import"./isWellBehavedNumber-CBezu4RU.js";import"./Label-sX9J87v-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CuZjWQGk.js";import"./index-DkjavtyB.js";import"./index-CvMvJg2Y.js";import"./types-DANPZVh2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BO9tlAnq.js";import"./immer-DhSozQAr.js";import"./RechartsWrapper-DX1uLaD6.js";import"./index-Ben5USOE.js";import"./index-B6-1923T.js";import"./axisSelectors-xODl-OZb.js";import"./d3-scale-BXwJ1MAg.js";import"./CartesianChart-DkI46ifx.js";import"./chartDataContext-CF17-miU.js";import"./CategoricalChart-U0rXY0aa.js";import"./tooltipContext-CYAxbJ0Z.js";import"./AnimatedItems-D5YeeLN_.js";import"./useAnimationId-MWsls-nH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dsk6_L47.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CEehWVTg.js";import"./RegisterGraphicalItemId-BgWpYWle.js";import"./ErrorBarContext-D_vZY3q2.js";import"./GraphicalItemClipPath-CCozhxOu.js";import"./SetGraphicalItem-nBqj_N_H.js";import"./getZIndexFromUnknown-CgrHJhQx.js";import"./graphicalItemSelectors-BoKD1Uav.js";import"./Curve-Bq9FIxO9.js";import"./step-Bs8kSgCl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CEMt9Ilr.js";import"./Dot-D2nW7dgA.js";import"./getRadiusAndStrokeWidthFromDot-C0Qzj9c9.js";import"./useElementOffset-CvwtkPiT.js";import"./uniqBy-Cz0JqC6a.js";import"./iteratee-DX-qp5DO.js";import"./Cross-BXBNH4eL.js";import"./Sector-BtYcWvDH.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
