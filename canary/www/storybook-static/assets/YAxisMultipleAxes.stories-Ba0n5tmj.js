import{R as t}from"./iframe-CVlx7bU_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bw2rcCFX.js";import{R as l}from"./zIndexSlice-CQ18OEDz.js";import{C as x}from"./ComposedChart-Dp5ziSq3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BcttE19g.js";import{L as a}from"./Line-coLulIXR.js";import{X as c}from"./XAxis-DMF0oTJ1.js";import{T as g}from"./Tooltip-D54drNp1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DOtvRCj8.js";import"./Text-GjS4GngU.js";import"./resolveDefaultProps-7sOSs16A.js";import"./ZIndexLayer-DRYYNy0H.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./throttle-CmXgXLjc.js";import"./axisSelectors-BJrugk6A.js";import"./d3-scale-CkwZs2c8.js";import"./CartesianAxis-BdpTb-nX.js";import"./Layer-CTBEbigF.js";import"./types-BMFpEHKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./dataEntryStyles-CMoIO_lw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BzACz78L.js";import"./useAnimationId-JkE7TXZo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./tooltipContext-CnffpGeV.js";import"./ErrorBarContext-DzVhOjsh.js";import"./activeStyles-5RuXhDxF.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getZIndexFromUnknown-CQuHEXnK.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./omit-BUnywL07.js";import"./isArguments-yB-y1yaH.js";import"./Curve-ByMphQa4.js";import"./step-B-eN0hXo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DO2U3Unb.js";import"./Dot-CLTLLAqo.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./getRadiusAndStrokeWidthFromDot-BIjWGvqa.js";import"./useElementOffset-CJNVPp8V.js";import"./uniqBy-Cw4jSxoQ.js";import"./iteratee-Cke1s3Tj.js";import"./Cross-EkJHXXuk.js";import"./Sector-DIaGg7Xj.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
