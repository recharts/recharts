import{e as t}from"./iframe-CxCywqzA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DxVfrwf5.js";import{g as l}from"./arrayEqualityCheck-yVNwB6mW.js";import{C as x}from"./ComposedChart-CX5jdlg2.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BHX1MDeb.js";import{L as a}from"./Line-ZzkhjeKR.js";import{X as A}from"./XAxis-_gXpBYMm.js";import{T as g}from"./Tooltip-SrYXT57O.js";import{R as f}from"./RechartsHookInspector-DGOvaE6a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CJvJrEPT.js";import"./Layer-BIf3cKek.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./Label-C7vnjRze.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DP6IzTUW.js";import"./zIndexSlice-DVQoyP0x.js";import"./immer-B8hoAty4.js";import"./types-ou1XrYCh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D6OwKyas.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./tooltipContext-DpnGzNJg.js";import"./ReactUtils-9u_I1YpW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_fNhFcV.js";import"./useAnimationId-C-vOWrwQ.js";import"./ActiveShapeUtils-sPKYOUtI.js";import"./RegisterGraphicalItemId-BpFbTFO3.js";import"./ErrorBarContext-CRsTDduf.js";import"./GraphicalItemClipPath-vFOoMVO7.js";import"./SetGraphicalItem-CwSOO4xE.js";import"./getZIndexFromUnknown-DP36f3hj.js";import"./graphicalItemSelectors-CYtQB4Qt.js";import"./Curve-BRrh0cMa.js";import"./step-IqpDGeuN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C96qswx6.js";import"./Dot-D7kdX87a.js";import"./getRadiusAndStrokeWidthFromDot-cuaaV9XU.js";import"./useElementOffset-DCPR5Aep.js";import"./uniqBy-CKEO767k.js";import"./iteratee-CVDXqgnY.js";import"./Cross-BNDdeklE.js";import"./Sector-B33jTWZA.js";import"./index-DGGA_IR8.js";import"./ChartSizeDimensions-CFycJ4k1.js";import"./OffsetShower-BkZVXWFE.js";import"./PlotAreaShower-BM-3w1mr.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
