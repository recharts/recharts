import{c as t}from"./iframe-CaARQ0s4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cf1zna9j.js";import{g as l}from"./zIndexSlice-CT6cs3HE.js";import{C as x}from"./ComposedChart-0hkFxU0y.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-dsqcN9LU.js";import{L as a}from"./Line-o1PwIiWS.js";import{X as A}from"./XAxis-CMZlUJn9.js";import{T as g}from"./Tooltip-SHUUsxst.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CO6N6w1L.js";import"./CartesianAxis-CKiY6dqA.js";import"./Layer-CrNDeidH.js";import"./resolveDefaultProps-B52lcPQI.js";import"./Text-V5D_mpos.js";import"./DOMUtils-_DsZOp5Z.js";import"./isWellBehavedNumber-D2fOOboq.js";import"./Label-COAzSUqp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSRcolRF.js";import"./index-BPXM-FiZ.js";import"./index-BihqodT2.js";import"./types-v4PqfPoB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-MMq6D890.js";import"./immer-DoZyPWPm.js";import"./RechartsWrapper-BhQjrq0m.js";import"./index-B_8hMxBA.js";import"./index-DNa9UEyx.js";import"./axisSelectors-BR_tDNDG.js";import"./d3-scale-BQLIct9Q.js";import"./CartesianChart-CtVi6KY7.js";import"./chartDataContext-B9lvWDA4.js";import"./CategoricalChart-CAffiMXn.js";import"./tooltipContext-xP0DYZ-p.js";import"./ReactUtils-BDfejln-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CSr7ELVn.js";import"./useAnimationId-9oP4gOjo.js";import"./ActiveShapeUtils-DYy5kA1Z.js";import"./RegisterGraphicalItemId-s6qV58ed.js";import"./ErrorBarContext-B2OH1xFp.js";import"./GraphicalItemClipPath-ZB8y26XE.js";import"./SetGraphicalItem-CLCCJcFS.js";import"./getZIndexFromUnknown-DOqrYhBX.js";import"./graphicalItemSelectors-B8Fy9Cw5.js";import"./Curve-aG6LIP1X.js";import"./step-Oxw9Oqwn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bo3chioo.js";import"./Dot-FinFGek5.js";import"./getRadiusAndStrokeWidthFromDot-BM_DPlIN.js";import"./useElementOffset-BPbzcAKR.js";import"./uniqBy-zpnrZsbG.js";import"./iteratee-BvPUjnAU.js";import"./Cross-XMKzybN2.js";import"./Sector-YMsADymf.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
