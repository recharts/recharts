import{e as t}from"./iframe-OJf-GSLb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DlvLAsVD.js";import{g as l}from"./arrayEqualityCheck-2_Nd0mNT.js";import{C as x}from"./ComposedChart-BWezQ33r.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CjlNP4mB.js";import{L as a}from"./Line-CxGxpbK3.js";import{X as A}from"./XAxis-CUozMhVT.js";import{T as g}from"./Tooltip-D5pa3gQj.js";import{R as f}from"./RechartsHookInspector-DjyNDFMe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bqyi-QIr.js";import"./Layer-DtNuGt5z.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./Label-B3MBaUXp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJFmSDw9.js";import"./zIndexSlice-CRdCk5dL.js";import"./immer-fAzYVHYH.js";import"./types-DpddDWMl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DYga_drD.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./tooltipContext-DOsS-G8m.js";import"./ReactUtils-CyupdVou.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xuYXul5.js";import"./useAnimationId-Dwrr6l_F.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./getZIndexFromUnknown-DZ34GgUD.js";import"./graphicalItemSelectors-C__wdMz-.js";import"./Curve-Cdrr4XTN.js";import"./step-4r8B6sQi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C9vqSoFh.js";import"./Dot-brDQHNAJ.js";import"./getRadiusAndStrokeWidthFromDot-CpS1-IJD.js";import"./useElementOffset-DO9IDGjg.js";import"./uniqBy-ChVqF39z.js";import"./iteratee-CbbfjsHA.js";import"./Cross-HUeICnQz.js";import"./Sector-CS_Hom6q.js";import"./index-DD4xdMms.js";import"./ChartSizeDimensions-CdI027Rl.js";import"./OffsetShower-BkR-_nsI.js";import"./PlotAreaShower-BECDt9HM.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
