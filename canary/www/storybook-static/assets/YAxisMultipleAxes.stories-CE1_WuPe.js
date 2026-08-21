import{R as t}from"./iframe-Badwul9q.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B14z5K_h.js";import{R as l}from"./zIndexSlice-CEPqA6uv.js";import{C as x}from"./ComposedChart-Cw6WxKp9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TI622yV7.js";import{L as a}from"./Line-Bq5Pip6f.js";import{X as c}from"./XAxis-DwaxFHEN.js";import{T as g}from"./Tooltip-BCssNaCG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-UqWUh_Dj.js";import"./Text-h9Iu7ZeD.js";import"./resolveDefaultProps-DH92j3VQ.js";import"./DOMUtils-BA3evV1C.js";import"./isWellBehavedNumber-kTcazBa4.js";import"./useId-DvG1S0KZ.js";import"./useBackwardsCompatibleTheme-BCTNxxa7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzsdJFep.js";import"./index-BL44lg5f.js";import"./index-D1wsKNYb.js";import"./RechartsWrapper-DT9_WEbf.js";import"./index-BAZVFS-Q.js";import"./index-BjECjR4R.js";import"./throttle-BG2Qy65h.js";import"./axisSelectors-CTwDlHnv.js";import"./d3-scale-TLUlZmuF.js";import"./renderedTicksSlice-BDycl-yX.js";import"./CartesianAxis-C8y8cQTk.js";import"./Layer-D6-JDPxR.js";import"./types-DAsbYWRO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D8iyGmBz.js";import"./chartDataContext-Bt38eSkc.js";import"./CategoricalChart-1ZyUfD1N.js";import"./AnimatedItems-D7VnlwSp.js";import"./useAnimationId-jiUA16Df.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHU_gf2m.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CF5WFyvr.js";import"./tooltipContext-CvgJP8aT.js";import"./RegisterGraphicalItemId-f2QL4JQB.js";import"./ErrorBarContext-DRSE_a5E.js";import"./GraphicalItemClipPath-CN8tu77t.js";import"./SetGraphicalItem-DT7eapgt.js";import"./getZIndexFromUnknown-_yx43O1u.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CxXa8Ner.js";import"./Curve-BaVpsYCr.js";import"./step-B8WIZZ5_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B6c6f_ub.js";import"./Dot-1XO9AD1Q.js";import"./getRadiusAndStrokeWidthFromDot-qvEZslpV.js";import"./useElementOffset-BfmRpqsp.js";import"./uniqBy-BfG2k_aA.js";import"./iteratee-CpkIGYwK.js";import"./Cross-DL-kP-Ml.js";import"./Sector-D5EuP6OP.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
