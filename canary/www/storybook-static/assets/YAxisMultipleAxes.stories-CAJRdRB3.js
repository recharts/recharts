import{R as t}from"./iframe-CKMzUQLl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DB4YGo7q.js";import{R as l}from"./zIndexSlice-COhM5Ssb.js";import{C as x}from"./ComposedChart-Br4fGf2D.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DRNyiWdb.js";import{L as a}from"./Line-BotpFDCu.js";import{X as c}from"./XAxis-BDBlWxDf.js";import{T as g}from"./Tooltip-BT_z6n7f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DwblDDwh.js";import"./Text-CUuCMSti.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BANjW4O_.js";import"./throttle-cmQF6pk6.js";import"./axisSelectors-BSZ3SCPn.js";import"./d3-scale-uc_I_mt7.js";import"./CartesianAxis-BPlDbcHH.js";import"./Layer-VHBsdASS.js";import"./types-DgiI7KOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-bg3MvxI9.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./LabelList-DO8MwQV1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaGbKQx_.js";import"./fillDefinitions-D5lwwS81.js";import"./useAnimationId-DKuDzs92.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./tooltipContext-DE_mUrwz.js";import"./dataEntryStyles-2pl_sY7K.js";import"./ErrorBarContext-CFogFGPo.js";import"./activeStyles-CT0hkTay.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getZIndexFromUnknown-DlOKJelH.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./omit-CyeXN-3X.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B0phiZsH.js";import"./step-Wrr8d7OB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./useElementOffset-BGehcf2H.js";import"./uniqBy-qDOcKTVS.js";import"./iteratee-DrtJv-M1.js";import"./Cross-IIL7sW25.js";import"./Sector-BqPv5Kez.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
