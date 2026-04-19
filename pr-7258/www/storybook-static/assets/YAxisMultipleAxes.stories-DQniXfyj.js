import{e as t}from"./iframe-RBDhNuvY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C9mdY1Fl.js";import{R as l}from"./arrayEqualityCheck-BS348k5r.js";import{C as x}from"./ComposedChart-amLhCzW6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CsQ_1zHs.js";import{L as a}from"./Line-BcjxrMGm.js";import{X as A}from"./XAxis-DanSQFXO.js";import{T as g}from"./Tooltip-DZ8kOMmN.js";import{R as f}from"./RechartsHookInspector-DOfZr9C1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BomHuY_r.js";import"./Layer-u__8P6Sj.js";import"./resolveDefaultProps-BY9krx0N.js";import"./Text-ksXr8HZ7.js";import"./DOMUtils-CPBkTdDQ.js";import"./Label-R4J1fJpi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bft7LqoW.js";import"./zIndexSlice-D1BncfDi.js";import"./immer-C4c_Wnmh.js";import"./types-bb6aQwNz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-zElQoHGi.js";import"./hooks-CGOwSC0e.js";import"./axisSelectors-BWB9zPfa.js";import"./d3-scale-D1n_szfL.js";import"./RechartsWrapper-pTvawuVp.js";import"./index-DTbqq10f.js";import"./CartesianChart-CvfrETq8.js";import"./chartDataContext-CHNtAjFy.js";import"./CategoricalChart-DfYiu2DH.js";import"./tooltipContext-D1GnuKPo.js";import"./ReactUtils-2aoVptM5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bog2Lcip.js";import"./isPlainObject-Do42GsO_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWX_qciT.js";import"./useAnimationId-Dwr1YxhS.js";import"./Trapezoid-DJVnFGas.js";import"./Sector-HpIE4-5_.js";import"./Symbols-CumYzi7M.js";import"./symbol-Dd7u_zBc.js";import"./step-B8I79wVl.js";import"./Curve-D-xIgRTC.js";import"./RegisterGraphicalItemId-Nj3D91YX.js";import"./ErrorBarContext-CdH3aE4v.js";import"./GraphicalItemClipPath-DADrCLWg.js";import"./SetGraphicalItem-n97qV-yJ.js";import"./getZIndexFromUnknown-Dxm_hxg_.js";import"./graphicalItemSelectors-DHrtocmr.js";import"./ActivePoints-CWeKESIY.js";import"./Dot-D4355bFc.js";import"./getRadiusAndStrokeWidthFromDot-Kev9_BfR.js";import"./useElementOffset-CxnBNmaX.js";import"./uniqBy-B88yBfPS.js";import"./iteratee-d0U_P1Ds.js";import"./Cross-5bEvXyOJ.js";import"./index-DrnbXucV.js";import"./ChartSizeDimensions-CoDDlzmV.js";import"./OffsetShower-CNAox3ML.js";import"./PlotAreaShower-BuNBetuA.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
