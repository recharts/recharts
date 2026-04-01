import{e as t}from"./iframe-DY46aw1T.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DuAnuVSE.js";import{R as l}from"./arrayEqualityCheck-0_K9klWl.js";import{C as x}from"./ComposedChart-xNspB-SJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D4Fhzfxu.js";import{L as a}from"./Line-BpqthCpk.js";import{X as A}from"./XAxis-_Mr4CO1Y.js";import{T as g}from"./Tooltip-BIlPfuWE.js";import{R as f}from"./RechartsHookInspector-DkRCe0AE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CK3eGRof.js";import"./Layer-hFhQiM_L.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./Label-BXRSGziE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./zIndexSlice-CoVcCSuo.js";import"./immer-BvCcuZ6o.js";import"./types-Dtzv1a1O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./RechartsWrapper-CSeg5AQz.js";import"./index-D_nfX1S8.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./tooltipContext-DBoXDcOk.js";import"./ReactUtils-Cz-9gufx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C_pX6xWx.js";import"./isPlainObject-zUPa-N8J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEP5-Dm7.js";import"./useAnimationId-Zdg7gWN0.js";import"./Trapezoid-vSPDkj38.js";import"./Sector-BAsKK7Vz.js";import"./Symbols-CVBOcrIt.js";import"./symbol-CEFOgOTV.js";import"./step-CyrTl9M_.js";import"./Curve-DQutT_ql.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./ErrorBarContext-BdBDnSnf.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./getZIndexFromUnknown-CfrDC0TC.js";import"./graphicalItemSelectors-l57etwjZ.js";import"./ActivePoints-BQsjSyf0.js";import"./Dot-Bs5nAcv2.js";import"./getRadiusAndStrokeWidthFromDot-BlOwTSD5.js";import"./useElementOffset-DwWwMAQX.js";import"./uniqBy-CUYvsV5i.js";import"./iteratee-Dyz53KPO.js";import"./Cross-FrkejMi3.js";import"./index-Bfh64D8_.js";import"./ChartSizeDimensions-Cyi7sjqL.js";import"./OffsetShower-Ci2ghI7q.js";import"./PlotAreaShower-DdXIA49x.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
