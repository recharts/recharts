import{R as t}from"./iframe-BwLZw-_M.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CM5oOvq7.js";import{R as l}from"./zIndexSlice-ChI0kTlF.js";import{C as x}from"./ComposedChart-CIavBfkK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cr7K9Che.js";import{L as a}from"./Line-B80TmJuf.js";import{X as c}from"./XAxis-D6rGR5iH.js";import{T as g}from"./Tooltip-Bzm0uEJT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-U4vkciLv.js";import"./Text-CBZN8k_S.js";import"./resolveDefaultProps-BegzgTjS.js";import"./DOMUtils-i6fMpPJ-.js";import"./pageBackground-BK1aOTMM.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./throttle-DvL4FsEQ.js";import"./axisSelectors-kUTEWjAI.js";import"./d3-scale-DGzUJoIU.js";import"./CartesianAxis-CE8eP4oM.js";import"./Layer-DuW_QRN1.js";import"./types-tzWyPHwG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C2SzhBqG.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./LabelList-6PzejVVq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8GVup-5.js";import"./fillDefinitions-B6DD0NTj.js";import"./themeFill-sw4Y96Vm.js";import"./useAnimationId-yjvP5B3D.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCNnGPme.js";import"./tooltipContext-Dso09ku8.js";import"./dataEntryStyles-B1tUzdyv.js";import"./ErrorBarContext-B9C041Rd.js";import"./activeStyles-lGmv_AYe.js";import"./SetGraphicalItem-CZMv7iCK.js";import"./getZIndexFromUnknown-scdivDQ9.js";import"./useEffectiveDataKey-C-YUm0jF.js";import"./omit-oKo5H_4y.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzfoK2T3.js";import"./step-QqIlLDuW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-vE2lL3n4.js";import"./Dot-P4orGxiz.js";import"./Symbols-D0k11amF.js";import"./symbol-CxJ4nrsQ.js";import"./getRadiusAndStrokeWidthFromDot-Di0VE_vh.js";import"./useElementOffset-D3IPICiA.js";import"./uniqBy-CMfwLbOw.js";import"./iteratee-QhoVn_-z.js";import"./Cross-DJ7FS3g1.js";import"./Sector-CzabNmXR.js";const Xt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},bt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,bt as __namedExportsOrder,Xt as default};
