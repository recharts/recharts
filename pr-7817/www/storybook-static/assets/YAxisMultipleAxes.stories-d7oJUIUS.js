import{R as t}from"./iframe-CovNYYUo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C8zfjK9y.js";import{R as l}from"./zIndexSlice-CG1QRjTL.js";import{C as x}from"./ComposedChart-DrZWGeZy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B_y4chwC.js";import{L as a}from"./Line-CMjTMYY1.js";import{X as c}from"./XAxis-Chp7Zboz.js";import{T as g}from"./Tooltip-y1LNUz1f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-9Le1xeRu.js";import"./Text-DEuItJ4K.js";import"./resolveDefaultProps-C3KXfaUm.js";import"./DOMUtils-De4xq-vL.js";import"./isWellBehavedNumber-CBjh5bWe.js";import"./useId-Cjo1HJUq.js";import"./useBackwardsCompatibleTheme-DN97qP5V.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ZvhdQo8-.js";import"./index-BOOo10Dt.js";import"./index-BX1OwXWy.js";import"./RechartsWrapper-CcAFjHOR.js";import"./axisSelectors-DLPfwtJa.js";import"./throttle-DFV15FmS.js";import"./d3-scale-8-fomhbE.js";import"./index-CJEqzZUU.js";import"./index-QRiHEery.js";import"./renderedTicksSlice-CESc-GFX.js";import"./index-B2LjI-r6.js";import"./CartesianAxis--m_-6qlQ.js";import"./Layer-DKlwDXlR.js";import"./types-KNQCcPDF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-90if4UGz.js";import"./chartDataContext-H-ub9DU9.js";import"./CategoricalChart-BDIwdK2u.js";import"./AnimatedItems-CJ9rAey6.js";import"./useAnimationId-JaizdS8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ba8s0q7Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5kbOuDR.js";import"./tooltipContext-CBhBcA7p.js";import"./RegisterGraphicalItemId-Bcqk9WK5.js";import"./ErrorBarContext-QhTrXeZ4.js";import"./GraphicalItemClipPath-Ba1ve3pE.js";import"./SetGraphicalItem-CMRsJ6yg.js";import"./getZIndexFromUnknown-_WCAf4BA.js";import"./useGraphicalItemIdentity-Dsva0Zcm.js";import"./Curve-CpiWutfx.js";import"./step-CsDIgpPD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D3M5ri8z.js";import"./Dot-DDfjuoX5.js";import"./getRadiusAndStrokeWidthFromDot-DnZmCba8.js";import"./useElementOffset-BHWyIDmU.js";import"./uniqBy-P1sDwhSw.js";import"./iteratee-Cj-wo9jc.js";import"./Cross-C9r9BpSQ.js";import"./Sector-B9A0Acf-.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
