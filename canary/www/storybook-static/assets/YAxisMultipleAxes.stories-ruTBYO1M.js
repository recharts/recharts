import{R as t}from"./iframe-DDlpcCnl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLVtcSn1.js";import{R as l}from"./zIndexSlice-IyRnOGSL.js";import{C as x}from"./ComposedChart-DTzVCjBN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C2nN3Wq3.js";import{L as a}from"./Line-BeAdfBzZ.js";import{X as c}from"./XAxis-BoZpTebr.js";import{T as g}from"./Tooltip-KqHdu6QC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CZPjkQy2.js";import"./Text-BYHxKQhi.js";import"./resolveDefaultProps-DdcIcuy0.js";import"./DOMUtils-CEWteLOc.js";import"./ZIndexLayer-6Wt9kpTG.js";import"./index-BrGVAlaK.js";import"./index-DgZ0S6kR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmUB7T9A.js";import"./throttle-BEGaSLni.js";import"./axisSelectors-DJ_js28E.js";import"./d3-scale-C8E3wvOe.js";import"./CartesianAxis-B9o_pqzh.js";import"./Layer-G7QHPTqV.js";import"./types-9pREsRXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDUEc77e.js";import"./index-DQ5N6C5N.js";import"./index-CVLdebNc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CEsAbTQz.js";import"./index-DwERpMJ8.js";import"./fillDefinitions-B51hWH8m.js";import"./CartesianChart-EWd5fLMj.js";import"./ZIndexPortal-cCqCXZCV.js";import"./CategoricalChart-fIZxwY-X.js";import"./LabelList-D8buJxhL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJnKnMxE.js";import"./useAnimationId-BvctuRLt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9MmIWSgd.js";import"./tooltipContext-DbT5aurG.js";import"./dataEntryStyles-DFT_PI06.js";import"./ErrorBarContext-BKlvoAQJ.js";import"./activeStyles-cdXgOxXT.js";import"./SetGraphicalItem-tysqpR10.js";import"./getZIndexFromUnknown-hkfY-fUh.js";import"./useEffectiveDataKey-DdYNwp-E.js";import"./omit-DMBtI0qv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BE_oIUBL.js";import"./step-8fTxxi9s.js";import"./path-DyVhHtw_.js";import"./ActivePoints-sqb6X4Yl.js";import"./Dot-D-KXvVde.js";import"./Symbols-CUes1UBB.js";import"./symbol-DbG6j_AG.js";import"./getRadiusAndStrokeWidthFromDot-DKbshIsH.js";import"./useElementOffset-C-qpYo5b.js";import"./uniqBy-5vufMWU3.js";import"./iteratee-DRvaSPOJ.js";import"./Cross-DO5nm-k1.js";import"./Sector-BLL9Klsh.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
