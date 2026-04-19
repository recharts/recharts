import{e as t}from"./iframe-Bz2Qn6Q0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B5cQ30-7.js";import{R as l}from"./arrayEqualityCheck-SrtJKTr1.js";import{C as x}from"./ComposedChart-DbbuyMVF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CJwBIc7Y.js";import{L as a}from"./Line-B0FBW4kU.js";import{X as A}from"./XAxis-0rcliQLc.js";import{T as g}from"./Tooltip-BW6NuR-I.js";import{R as f}from"./RechartsHookInspector-CRp0734Q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BokQwd-n.js";import"./Layer-Bp-alVkQ.js";import"./resolveDefaultProps-Bw6mkRAu.js";import"./Text-BeGwGDIw.js";import"./DOMUtils-CfBuJ7pA.js";import"./Label-Cx92zGqb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ci1J2GEs.js";import"./zIndexSlice-MM57jocS.js";import"./immer-Bf1ANpdG.js";import"./types-Bq1ywEo3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-KjJl__e1.js";import"./hooks-Bn0YkRzT.js";import"./axisSelectors-Dn0P--3Q.js";import"./d3-scale-Cj0fhoc6.js";import"./RechartsWrapper-BxgxCr4x.js";import"./index-XEi-vt0m.js";import"./CartesianChart-JAhvkHqp.js";import"./chartDataContext-DBTgugHo.js";import"./CategoricalChart-M6gnVyEJ.js";import"./tooltipContext-BkgkT_1E.js";import"./ReactUtils-BKN20BZR.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cw4OmDCr.js";import"./isPlainObject-C7eNr1WD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZ4j4B1r.js";import"./useAnimationId-C0d16Qdx.js";import"./Trapezoid-BI8cfUTU.js";import"./Sector-DlNvRyQv.js";import"./Symbols-CBkGZNC5.js";import"./symbol-CWNMfYRI.js";import"./step-Dly43UW-.js";import"./Curve-DWJn7QSQ.js";import"./RegisterGraphicalItemId-BDNbOxSF.js";import"./ErrorBarContext-s59o9x04.js";import"./GraphicalItemClipPath-DmsPoL2A.js";import"./SetGraphicalItem-DmI1gY5l.js";import"./getZIndexFromUnknown-DzER0cx7.js";import"./graphicalItemSelectors-BZwK_bTp.js";import"./ActivePoints-BoxMP4wY.js";import"./Dot-H2-aVAZo.js";import"./getRadiusAndStrokeWidthFromDot-9Je4pShm.js";import"./useElementOffset-D3Hbl9Ub.js";import"./uniqBy-nH0hK7Do.js";import"./iteratee-C2xaFs01.js";import"./Cross-BMwN9O17.js";import"./index-6agPL1sG.js";import"./ChartSizeDimensions-DcrFs19n.js";import"./OffsetShower-CKOTZiON.js";import"./PlotAreaShower-SYizFfd0.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
