import{R as t}from"./iframe-Dveh6XC4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-w9pVccwz.js";import{R as l}from"./zIndexSlice-CHGKLvUt.js";import{C as x}from"./ComposedChart-BOsUMJ6o.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B48vwr9w.js";import{L as a}from"./Line-41i7MCIm.js";import{X as c}from"./XAxis-CRKEYqOq.js";import{T as g}from"./Tooltip-CFGvSGFT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Vwsx_sp3.js";import"./Text-DDi8tnpk.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./throttle-CRxbwEvt.js";import"./axisSelectors-BNJiRWtc.js";import"./d3-scale-XJHyjNta.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BjJrVVo_.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./LabelList-C0azlQgx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-L-kKC_mf.js";import"./useAnimationId-ClkvXH7X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./tooltipContext-CwdmFdSB.js";import"./dataEntryStyles-CX9qr7B-.js";import"./ErrorBarContext-DkBQ5rXz.js";import"./activeStyles-C0UNB_bG.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./getZIndexFromUnknown-DnDKF1zo.js";import"./useEffectiveDataKey-CghzYeW7.js";import"./omit-D9-jmYb8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BFn8Gc1Y.js";import"./step-COK9gonL.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B26bJhxw.js";import"./Dot-BnEEmk8R.js";import"./Symbols-QXbi9vzZ.js";import"./symbol-CTWslb94.js";import"./getRadiusAndStrokeWidthFromDot-BzBtfZmi.js";import"./useElementOffset-Diqs6aNv.js";import"./uniqBy-r-8_JOan.js";import"./iteratee-F2t8nio4.js";import"./Cross-CA-OBfX-.js";import"./Sector-DPSFgAWf.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
