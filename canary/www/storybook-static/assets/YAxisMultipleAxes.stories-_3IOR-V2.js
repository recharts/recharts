import{R as t}from"./iframe-0XL0sthS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BB_fEBXq.js";import{R as l}from"./zIndexSlice-C9Fui9SZ.js";import{C as x}from"./ComposedChart-Deu_CMYg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4oEz1n5v.js";import{L as a}from"./Line-BgTy5bbd.js";import{X as c}from"./XAxis-8dcEWD9_.js";import{T as g}from"./Tooltip-CfUheZOT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CuZoViK1.js";import"./Text-B44V9o4J.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./throttle-Dos2q2R1.js";import"./dataEntryStyles-jYd5_Tui.js";import"./axisSelectors-CET1BM1x.js";import"./d3-scale-D8BAYDAt.js";import"./CartesianAxis-P0zAs4bB.js";import"./Layer-3mPd111u.js";import"./types-B6SF8UCq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-mX6d9D.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./LabelList-Bxms0g1E.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cwefqyhe.js";import"./useAnimationId-RVbaj9rd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./tooltipContext-83SIdlui.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./activeStyles-DtmDpwwD.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getZIndexFromUnknown-B-eE6KkA.js";import"./useEffectiveDataKey-OloeJtRb.js";import"./omit-DbXB84Si.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B4Yxq0yJ.js";import"./step-BGDQTRvK.js";import"./path-DyVhHtw_.js";import"./ActivePoints-jtZNkg-Y.js";import"./Dot-BnJWJFTm.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./getRadiusAndStrokeWidthFromDot-BMKT-chW.js";import"./useElementOffset-BydIrxuW.js";import"./uniqBy-DSUFf6NQ.js";import"./iteratee-C_ZjvgJo.js";import"./Cross-B9nRaxtb.js";import"./Sector-B2k3IPvz.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
