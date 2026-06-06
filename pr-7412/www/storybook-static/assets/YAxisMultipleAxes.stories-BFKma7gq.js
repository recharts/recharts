import{R as t}from"./iframe-BiXVY0YN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Da5Yhwpa.js";import{R as l}from"./zIndexSlice-nY6JNSg8.js";import{C as x}from"./ComposedChart-Cf4jkg33.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cz7LafTL.js";import{L as a}from"./Line-DjzxsS4q.js";import{X as c}from"./XAxis-8aOHTtEo.js";import{T as g}from"./Tooltip-CONywgA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DSfNO7n4.js";import"./CartesianAxis-eCQKtisH.js";import"./Layer-uuEILT3S.js";import"./resolveDefaultProps-DD4XGInB.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./Label-BJ6MA63M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6ebEplbW.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./types-CLXMlpTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./immer-Bguoov5l.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./tooltipContext-aqxYfSHG.js";import"./AnimatedItems-DfhrJO_Z.js";import"./useAnimationId-CfBicigm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DuKXzg_S.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getZIndexFromUnknown-C5kk8Aaf.js";import"./graphicalItemSelectors-C0O5oaAS.js";import"./Curve-D7wuzLSQ.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./useElementOffset-CPLS44DG.js";import"./uniqBy-CcGBVuj2.js";import"./iteratee-STjWE_qx.js";import"./Cross-C3BpIl7J.js";import"./Sector-jQ_V-qCe.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
