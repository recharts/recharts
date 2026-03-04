import{e as t}from"./iframe-D83ZSNbz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-QvVYxZLS.js";import{R as l}from"./arrayEqualityCheck-BGA4RwPN.js";import{C as x}from"./ComposedChart-B5Ky6_S3.js";import{B as o}from"./Bar-B6lDsnLA.js";import{L as a}from"./Line-nYAELe6c.js";import{X as c}from"./XAxis-C6_NJJDB.js";import{T as A}from"./Tooltip-CqpJOm1l.js";import{R as g}from"./RechartsHookInspector-BWsm2Zwo.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-4L0yK2SL.js";import"./Layer-CzMDOsc5.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./Label-CPoQ7ALx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlsfoIRs.js";import"./zIndexSlice-z-sDwpjP.js";import"./immer-CVep4-EU.js";import"./types-CQ4rEtgJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./RechartsWrapper-6kLXfAE0.js";import"./index-8b00PKjq.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./tooltipContext-DO06d1Q0.js";import"./ReactUtils-Dwz5eB4M.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C7T_TsZu.js";import"./isPlainObject-CP5WOR_K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcHYsitW.js";import"./useAnimationId-DC1LkXPL.js";import"./Trapezoid-DcZW9PM6.js";import"./Sector-BNG-UwhR.js";import"./Symbols-BiJ-DNBY.js";import"./symbol-S6sIvH4b.js";import"./step-DnRHTEfS.js";import"./Curve-VgEiMVDm.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./ErrorBarContext-DI1C1qO8.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./getZIndexFromUnknown-uQaIatUX.js";import"./graphicalItemSelectors-CeivcGR-.js";import"./ActivePoints-xgfu-OUk.js";import"./Dot-CeVblkN7.js";import"./getRadiusAndStrokeWidthFromDot-C8XAklJz.js";import"./useElementOffset-BGi4QxFd.js";import"./uniqBy-DgQL0Nmw.js";import"./iteratee-DGB-E-W_.js";import"./Cross-DfakOLYr.js";import"./index-CSluNsr9.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
