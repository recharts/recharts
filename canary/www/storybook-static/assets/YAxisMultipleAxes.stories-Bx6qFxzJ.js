import{R as t}from"./iframe-BfpZEj1J.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BjTIc8Tf.js";import{R as l}from"./zIndexSlice-DN9OEqSU.js";import{C as x}from"./ComposedChart-sYHyq_r0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DG_3Vyc9.js";import{L as a}from"./Line-XMFg_Gfd.js";import{X as c}from"./XAxis-CaBw27aw.js";import{T as g}from"./Tooltip-8pU18wvs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cr-kSyez.js";import"./Text-C5CT5OBg.js";import"./resolveDefaultProps-RgMSUlUO.js";import"./pageBackground-DtTiB4cX.js";import"./useId-CWVkYNpQ.js";import"./ZIndexLayer-BnqS0DyP.js";import"./index-lWFIbTSl.js";import"./index-BjD6SDXa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D5cajvkJ.js";import"./throttle-of37Yc3d.js";import"./dataEntryStyles-B31S2PZ0.js";import"./axisSelectors-DdEmqG6y.js";import"./d3-scale-DAHzu_9m.js";import"./CartesianAxis-ChtcS9gQ.js";import"./Layer-CLoP9xkX.js";import"./types-Dmnhw6yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DAkeOnVU.js";import"./index-BZ99J-Wl.js";import"./index-Wmom0di-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DgjurVnr.js";import"./index-CWp6QAhS.js";import"./CartesianChart-BMikS9ic.js";import"./chartDataContext-CDRBSiAQ.js";import"./CategoricalChart-AcKzUHIb.js";import"./activeStyles--hoQ05pe.js";import"./useAnimationId-CO5y2Yl_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBeYy_hq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CX9J7Siy.js";import"./tooltipContext-BGMe3OR6.js";import"./RegisterGraphicalItemId-B270wFxD.js";import"./ErrorBarContext-CGuCRP-n.js";import"./SetGraphicalItem-BEEPPsSN.js";import"./getZIndexFromUnknown-xdrsezLL.js";import"./useEffectiveDataKey-CijXZAWm.js";import"./omit-CliYB69i.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DcgjXnaH.js";import"./step-BIMKm40t.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C1WdAM52.js";import"./Dot-BgvZVx9M.js";import"./Symbols-DlN3yTjK.js";import"./symbol-WMObR4nv.js";import"./getRadiusAndStrokeWidthFromDot-Cr9Vi9Z2.js";import"./useElementOffset-ESpol_qM.js";import"./uniqBy-C05yYfI4.js";import"./iteratee-UOUNNVON.js";import"./Cross-DVk9nb-O.js";import"./Sector-CSZSdBbv.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
