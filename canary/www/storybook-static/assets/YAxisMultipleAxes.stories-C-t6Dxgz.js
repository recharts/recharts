import{R as t}from"./iframe-CzzdtdLH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-xlB7Mrcu.js";import{R as l}from"./zIndexSlice-Co00U7DY.js";import{C as x}from"./ComposedChart-QZ0vaLGf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQUvCOCn.js";import{L as a}from"./Line-BIkkaUAa.js";import{X as c}from"./XAxis-CKEr4FP9.js";import{T as g}from"./Tooltip-CXOG8T9I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BbUS-Vpa.js";import"./Layer-BbK8NiGM.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./Label-CL5-PwM4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChHVLqdE.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./types-3QfDILpo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./throttle-DKJrGqy3.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./axisSelectors-BlRIZcT4.js";import"./d3-scale-pYyMK9Lh.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./tooltipContext-BnTIeiHd.js";import"./AnimatedItems-BMiyvThI.js";import"./useAnimationId-C9cdprRM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getZIndexFromUnknown-DX4gujlY.js";import"./graphicalItemSelectors-BaSKkPeO.js";import"./Curve-Jr9YsAj6.js";import"./step-R9BHjTQW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B_ez_f7F.js";import"./Dot-BX-Vbuyt.js";import"./getRadiusAndStrokeWidthFromDot-DFgztpRX.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";import"./Cross-B-pr5MkY.js";import"./Sector-CebjY1i8.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
