import{R as t}from"./iframe-BJZBYlXs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-8yYBvtiR.js";import{R as l}from"./zIndexSlice-4kzTBdEO.js";import{C as x}from"./ComposedChart-C6IGkTRw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B1VVAgaA.js";import{L as a}from"./Line-DsC7P6_G.js";import{X as c}from"./XAxis-BODArBrx.js";import{T as g}from"./Tooltip-D_m6xZp8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BB8sjzzI.js";import"./Text-D_QESfNW.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./DOMUtils-CSm0nbrI.js";import"./pageBackground-OPtbMqw3.js";import"./ZIndexLayer-9eIJN5cX.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BW13raLn.js";import"./throttle-m042I2dJ.js";import"./axisSelectors-fPyxXNp-.js";import"./d3-scale-fXkyVTj6.js";import"./CartesianAxis-DuzHYXrg.js";import"./Layer-BiONajIB.js";import"./types-BRBV9Zbz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-xMruxvG5.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./LabelList-CjXuEtRO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcbqjYEw.js";import"./fillDefinitions-DzwllWHv.js";import"./themeFill-DO9vEba-.js";import"./useAnimationId-t_dEgl2e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./tooltipContext-B6VSljem.js";import"./dataEntryStyles-O6Ub96yy.js";import"./ErrorBarContext-B2TtUlqL.js";import"./activeStyles-CNDsNUTt.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getZIndexFromUnknown-D2iN--cE.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./omit-XdCNQa49.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BZZJQhfg.js";import"./step-C9q08w-O.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./useElementOffset-7dnw2xrI.js";import"./uniqBy-C8XE-Jln.js";import"./iteratee-B-U3qR3F.js";import"./Cross-BSgYYV6b.js";import"./Sector-Rmkv_xXG.js";const Xt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
