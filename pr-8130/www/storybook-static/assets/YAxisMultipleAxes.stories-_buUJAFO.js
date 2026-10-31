import{R as t}from"./iframe-DP_a1dmY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DqctmLMG.js";import{R as l}from"./zIndexSlice-rjLYhejy.js";import{C as x}from"./ComposedChart-CSr8xtVa.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B2_BGS8-.js";import{L as a}from"./Line-B0f2Q_SE.js";import{X as c}from"./XAxis-1vjsoN9j.js";import{T as g}from"./Tooltip-BLa4yGZh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ja-Sj5Q7.js";import"./Text-Dp_r5yDX.js";import"./resolveDefaultProps-BUA_ea65.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8froBOH.js";import"./throttle-BChPb-_m.js";import"./axisSelectors-DEw1mS80.js";import"./d3-scale-CQwtQXkW.js";import"./CartesianAxis-C1uxWw-Y.js";import"./Layer-CZaWfsGO.js";import"./types-CDz_n5r5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-B7p3ZvHO.js";import"./index-BKlw8SLM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B4nQvyyr.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./LabelList-DL3Ydiqu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYUStI_n.js";import"./useAnimationId-CFEdeYhu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./tooltipContext-Bj28zsI1.js";import"./dataEntryStyles-4JNZcrwL.js";import"./ErrorBarContext-tkKb7Nex.js";import"./activeStyles-BV6CK3cL.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getZIndexFromUnknown-dAQr12f2.js";import"./useEffectiveDataKey-D45Rikd2.js";import"./omit-cE-fDaQb.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BWt9Gc4p.js";import"./step-D5N_P6yo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DnIoFkEo.js";import"./Dot-FQPok2YB.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./getRadiusAndStrokeWidthFromDot-BgEfcfUu.js";import"./useElementOffset-CYP9m4TG.js";import"./uniqBy-Bwcnbh18.js";import"./iteratee-Doq5RcdM.js";import"./Cross-BfRejwAV.js";import"./Sector-1u7_Cs3V.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
