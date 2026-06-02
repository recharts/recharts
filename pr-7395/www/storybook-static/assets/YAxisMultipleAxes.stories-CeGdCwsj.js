import{c as t}from"./iframe-QM_Hy95O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ByuMssjK.js";import{g as l}from"./zIndexSlice-BlNPxokt.js";import{C as x}from"./ComposedChart-CQ4Xoo2c.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BT3DLKCh.js";import{L as a}from"./Line-Uf2Z77KS.js";import{X as A}from"./XAxis-k_T7UBmN.js";import{T as g}from"./Tooltip-Cr6GPD4L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-in6fAyvy.js";import"./CartesianAxis-B-Qfc6z6.js";import"./Layer-DMLrZzOp.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./Text-CiqEhbxu.js";import"./DOMUtils-O0X-t8NY.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./Label-D4PO75Y9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiKPrQca.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./types-B29_egWp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./immer-fQ35ak9n.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./index-CGSa8iwo.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./tooltipContext-BHpqlu0M.js";import"./ReactUtils-BIEdgNAL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dfia817X.js";import"./useAnimationId-BxdIxPQQ.js";import"./ActiveShapeUtils-Ben0Z5Gs.js";import"./RegisterGraphicalItemId-Ch0Vf5AU.js";import"./ErrorBarContext-BHFsn856.js";import"./GraphicalItemClipPath-BHIKYbjI.js";import"./SetGraphicalItem-DzbZ3uGV.js";import"./getZIndexFromUnknown-DQuy0pqP.js";import"./graphicalItemSelectors-BTjfDUNL.js";import"./Curve-BXRuFBMP.js";import"./step-BH3XZet7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-48Z6mXbE.js";import"./Dot-CfJGHcqY.js";import"./getRadiusAndStrokeWidthFromDot-6yNSu3ln.js";import"./useElementOffset-BwqgoTsT.js";import"./uniqBy-B1I9aJN4.js";import"./iteratee-CmZMcvd6.js";import"./Cross-BQf7iwP-.js";import"./Sector-BgqjXeYd.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
