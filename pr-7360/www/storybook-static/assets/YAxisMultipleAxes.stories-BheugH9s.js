import{e as t}from"./iframe-HklBE7vu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D8onK4in.js";import{g as l}from"./arrayEqualityCheck-CG9NM7M7.js";import{C as x}from"./ComposedChart-BGfN3j9r.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CIn-J4Yy.js";import{L as a}from"./Line-CUZjpINw.js";import{X as A}from"./XAxis-BeXZR1BO.js";import{T as g}from"./Tooltip-DcVYEwBh.js";import{R as f}from"./RechartsHookInspector-CROecA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C0qWYU4C.js";import"./Layer-D8ZS5vyC.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./Label-ClB5KqOQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPeCIwGs.js";import"./zIndexSlice-CVyG9qRx.js";import"./immer-B5bJcxrJ.js";import"./types-D0dCN7Ox.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice--_3RJj48.js";import"./hooks-CnW7pryE.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./tooltipContext-CD1UQP6_.js";import"./ReactUtils-mFr3j9RO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGNZ3kBX.js";import"./useAnimationId-Yfa74zNK.js";import"./ActiveShapeUtils-CKRCWn6k.js";import"./RegisterGraphicalItemId-BaLxd7fn.js";import"./ErrorBarContext-C1pX8SkM.js";import"./GraphicalItemClipPath-Xc6uO7Vp.js";import"./SetGraphicalItem-CjWW7GpL.js";import"./getZIndexFromUnknown-BjmvbxqI.js";import"./graphicalItemSelectors-CqMvFzRu.js";import"./Curve-CrXnBsHg.js";import"./step-BUDT2jIN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D0HNFK49.js";import"./Dot-C8qeBV5T.js";import"./getRadiusAndStrokeWidthFromDot-Bqn73jYn.js";import"./useElementOffset-Dsq1NBLL.js";import"./uniqBy-BzZ8JhX0.js";import"./iteratee-BhmnkMoJ.js";import"./Cross-Cha9U-l7.js";import"./Sector-C3xOLEiL.js";import"./index-DO5d7GKD.js";import"./ChartSizeDimensions-GhqI97PU.js";import"./OffsetShower-CEG4HECi.js";import"./PlotAreaShower-utUcCZ-k.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
