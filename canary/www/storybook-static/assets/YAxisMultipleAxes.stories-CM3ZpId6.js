import{R as t}from"./iframe-D_uMBlIp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Q267elff.js";import{R as l}from"./zIndexSlice-Cqv84PqK.js";import{C as x}from"./ComposedChart-DhQzd1k_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BPDo9Gzi.js";import{L as a}from"./Line-DDu_6whQ.js";import{X as c}from"./XAxis-ChmGUeiL.js";import{T as g}from"./Tooltip-D9RzUAhb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xcLv9MPJ.js";import"./Text-CgSvhKKx.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-PGXXztW2.js";import"./throttle-z9Tdm54L.js";import"./axisSelectors-BH5tVjmc.js";import"./d3-scale-De88z7ff.js";import"./CartesianAxis-CaJmW0E9.js";import"./Layer-B6KF3bsJ.js";import"./types-DFJuzk9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-gFpkW2lO.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./LabelList-lhjdoetJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8h04Bjl.js";import"./useAnimationId-BUGTxmjG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CosApWaB.js";import"./tooltipContext-CaXiSc-d.js";import"./dataEntryStyles-BSEnNQ9n.js";import"./ErrorBarContext-d3qxHiYM.js";import"./activeStyles-Dd3au7Dm.js";import"./SetGraphicalItem-jkYvUFdr.js";import"./getZIndexFromUnknown-BwOdCaar.js";import"./useEffectiveDataKey-CgejumXO.js";import"./omit-SCpWrPQU.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D7Q9HT-0.js";import"./step-CndKQIzs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CutcUh5t.js";import"./Dot-CWRVOvZp.js";import"./Symbols-C6zxOEV9.js";import"./symbol-kWjCqPSu.js";import"./getRadiusAndStrokeWidthFromDot-DtDP844S.js";import"./useElementOffset-cdiG7Q_h.js";import"./uniqBy-CwR9iSeD.js";import"./iteratee-C8wVZEUu.js";import"./Cross-sb0TeG48.js";import"./Sector-b-nTepMT.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
