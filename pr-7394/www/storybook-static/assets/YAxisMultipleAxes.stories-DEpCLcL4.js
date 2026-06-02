import{c as t}from"./iframe-DcZ25aZq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C_fkHFUI.js";import{g as l}from"./zIndexSlice-Bx385Wu5.js";import{C as x}from"./ComposedChart-DlgAAB8M.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-t_I4kfRf.js";import{L as a}from"./Line-CAf-fyij.js";import{X as A}from"./XAxis-DyhIsrPh.js";import{T as g}from"./Tooltip-DUzLPYEr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BBHPk0wF.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./isWellBehavedNumber-DH8Wjvkj.js";import"./Label-madSHGhS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CX9fDFPC.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./immer-CNH0Qykv.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./tooltipContext-DRhfxuNN.js";import"./ReactUtils-BfQpQwdE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMeCNBC5.js";import"./useAnimationId-wbWpU06B.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./getZIndexFromUnknown-CWr4yDyL.js";import"./graphicalItemSelectors-onWYZPz1.js";import"./Curve-C4CaZCwE.js";import"./step-BUy109CO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-mSOk-v2V.js";import"./Dot-Ci7H-Wks.js";import"./getRadiusAndStrokeWidthFromDot-CxfGK76v.js";import"./useElementOffset-DHtU9LZv.js";import"./uniqBy-CxmJpd9c.js";import"./iteratee-DGXMHyCR.js";import"./Cross-JclV0vmp.js";import"./Sector-BdKYeoRV.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
