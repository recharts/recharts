import{R as t}from"./iframe-D9AiK7MA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-tdOr8uxM.js";import{R as l}from"./zIndexSlice-DhQQTweq.js";import{C as x}from"./ComposedChart-DRe_fBXL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Da-lcEEj.js";import{L as a}from"./Line-DZgXAn__.js";import{X as c}from"./XAxis-BCGK_x8y.js";import{T as g}from"./Tooltip-N7IAnmYv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaTR-VJZ.js";import"./Text-C_gczTx7.js";import"./resolveDefaultProps-BrjTargu.js";import"./DOMUtils-C3E39plZ.js";import"./isWellBehavedNumber-NbAnwMd8.js";import"./useId-CoGOq4Zh.js";import"./useBackwardsCompatibleTheme-D9vqIt6-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-XiAaecg1.js";import"./index-u8J4Prlj.js";import"./index-B_iylBpT.js";import"./RechartsWrapper-FkIEBIEk.js";import"./index-CBrmEfkl.js";import"./index-DhLn_wsy.js";import"./throttle-CqrKdGFn.js";import"./axisSelectors-CD31PgCw.js";import"./d3-scale-CwcWyPDB.js";import"./renderedTicksSlice-D9WbyrEd.js";import"./CartesianAxis-NS8dhc5y.js";import"./Layer-nhRynhYN.js";import"./types-Cl8UDNBF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BPglXXGd.js";import"./chartDataContext-DNFxmTn3.js";import"./CategoricalChart-BiDsY9G3.js";import"./AnimatedItems-DbRJrrAP.js";import"./useAnimationId-C-WCGbVo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJSM4NJJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cx_4S3nX.js";import"./tooltipContext-DmjzTDu2.js";import"./RegisterGraphicalItemId-ihVYTcTs.js";import"./ErrorBarContext-jnq7QWza.js";import"./GraphicalItemClipPath-CE-RXk6S.js";import"./SetGraphicalItem-dm3-HqvX.js";import"./getZIndexFromUnknown-6kdP3LZO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ed7jlxwP.js";import"./Curve-wdmzEcHN.js";import"./step-DlhrK73A.js";import"./path-DyVhHtw_.js";import"./ActivePoints--lqdywIN.js";import"./Dot-CbHR5Oi7.js";import"./getRadiusAndStrokeWidthFromDot-CTRnAYuX.js";import"./useElementOffset-rjFr_gsT.js";import"./uniqBy-6EpLurNX.js";import"./iteratee-KOAwIcrd.js";import"./Cross-D8CThjxd.js";import"./Sector-D3q17Cgh.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
