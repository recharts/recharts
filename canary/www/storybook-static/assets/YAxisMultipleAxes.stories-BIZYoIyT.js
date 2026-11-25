import{R as t}from"./iframe-KA27XLgH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Db8yqFFW.js";import{R as l}from"./zIndexSlice-B5jZTfpG.js";import{C as x}from"./ComposedChart-NCoKrWfI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BPNX11cK.js";import{L as a}from"./Line-BBMiCx56.js";import{X as c}from"./XAxis-BELMhMr5.js";import{T as g}from"./Tooltip-C4bYXqBt.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DljT9-ag.js";import"./get-CjriyByo.js";import"./Label-B69AByr3.js";import"./Text-8iqEDvQJ.js";import"./ZIndexLayer-R6ZlJQ0g.js";import"./index-CkBS2fzk.js";import"./index-Ckg884lQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3Tv-TSh.js";import"./throttle-CoiFOdIR.js";import"./axisSelectors-C9UcFeRr.js";import"./d3-scale-C3G3_Gqb.js";import"./CartesianAxis-DSAJb9yU.js";import"./Layer-MjJu6ARy.js";import"./types-CQ5wDBZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-m7yN3OkN.js";import"./index-DRgQ1v-L.js";import"./index-DjOzCNYa.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-TR_xYtI_.js";import"./index-B2SGDklF.js";import"./fillDefinitions-BQM9erML.js";import"./CartesianChart-fWhWe39l.js";import"./chartDataContext-BllWN6wY.js";import"./CategoricalChart-Bne8SWuB.js";import"./dataEntryStyles-CRFv6Bpc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_gP81X4.js";import"./useAnimationId-ByBbFw3W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BAOEM0H-.js";import"./tooltipContext-fUz6Y7lh.js";import"./ErrorBarContext-DNhP_BG0.js";import"./activeStyles-Rsdle8Gs.js";import"./SetGraphicalItem-gJWf9_t-.js";import"./getZIndexFromUnknown-iMJ09KuI.js";import"./useEffectiveDataKey-BN70kZIV.js";import"./omit-D2mr_9ks.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BbOzSNOE.js";import"./Curve-C0q5au3B.js";import"./step-Dw4WzDeI.js";import"./path-BBMZd4YL.js";import"./ActivePoints-deQG4rJH.js";import"./Dot-CKQX6HZM.js";import"./Symbols-CazKqwF3.js";import"./symbol-CGclnZ-V.js";import"./useElementOffset-BBAHP-Sy.js";import"./uniqBy-BPMiXjHD.js";import"./iteratee-CUUDCjTn.js";import"./Cross-DiQMcTkm.js";import"./Sector-CH1VJLUF.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
