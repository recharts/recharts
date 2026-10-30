import{R as t}from"./iframe-BvC_nX2I.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dnd7ECK6.js";import{R as l}from"./zIndexSlice-Deux2KLj.js";import{C as x}from"./ComposedChart-D6o-RTOM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-eAuVQmvm.js";import{L as a}from"./Line-DlYE1LdE.js";import{X as c}from"./XAxis-DJblgq_P.js";import{T as g}from"./Tooltip-DVnkgbDa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CNqVbewr.js";import"./Text-3ao1DtcI.js";import"./resolveDefaultProps-DT691zhh.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./throttle-CirueaOA.js";import"./axisSelectors-D1Op89Ra.js";import"./d3-scale-oQwuANVt.js";import"./CartesianAxis-CcuHoEVr.js";import"./Layer-BgbmxeTS.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-YXBLwPUp.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./LabelList-CRaDVB5f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaXkiWJ0.js";import"./fillDefinitions-CZGVPI6N.js";import"./useAnimationId-CfSQBeBZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./tooltipContext-CZ7EZjaJ.js";import"./dataEntryStyles-DH8AExSk.js";import"./ErrorBarContext-p-ctGfT-.js";import"./activeStyles-D5yKyFeN.js";import"./SetGraphicalItem-P596Nxos.js";import"./getZIndexFromUnknown-DBLNDD0c.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./omit-QtYQm21j.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dwq2onbG.js";import"./step-MgrEs1-v.js";import"./path-DyVhHtw_.js";import"./ActivePoints-K5tloKEU.js";import"./Dot-B0BFGoSP.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./getRadiusAndStrokeWidthFromDot-BvCb0Nrn.js";import"./useElementOffset-C7rqP3X3.js";import"./uniqBy-BF0sKSrQ.js";import"./iteratee-B6a_e8WW.js";import"./Cross-DzDfYPf9.js";import"./Sector-Dsg_Vl6t.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
