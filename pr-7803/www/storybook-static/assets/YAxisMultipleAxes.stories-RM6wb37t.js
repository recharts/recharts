import{R as t}from"./iframe-CbFuLFtu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-o1yfQ20q.js";import{R as l}from"./zIndexSlice-D_moIlDh.js";import{C as x}from"./ComposedChart-DrqR_TZs.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B21LtgKk.js";import{L as a}from"./Line-BaLTgSTX.js";import{X as c}from"./XAxis-DNc-Fb9p.js";import{T as g}from"./Tooltip-CIq0HG2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B0AIyR8e.js";import"./Text-Cl3vVdZy.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./DOMUtils-ac9yPFyL.js";import"./isWellBehavedNumber-I93tJShS.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLo3iEV5.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./RechartsWrapper-mkS7ocZy.js";import"./axisSelectors-rEOj_nFC.js";import"./throttle-B61_h2S2.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./index-KFI10z6J.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./CartesianAxis-DmdL1NlC.js";import"./Layer-DrMT32rq.js";import"./types-CI87_xcK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./AnimatedItems-pPCGFSQU.js";import"./useAnimationId-B7x_KCom.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDNbo7Ju.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C1bQLB6k.js";import"./tooltipContext-ssaoi-NS.js";import"./RegisterGraphicalItemId-Bfab39Ve.js";import"./ErrorBarContext-u6MEnxN0.js";import"./GraphicalItemClipPath-Cc0KTnBN.js";import"./SetGraphicalItem-Ga4RFH-2.js";import"./getZIndexFromUnknown-BzNFvhEI.js";import"./useGraphicalItemIdentity-WLgpMifT.js";import"./Curve-_JdbhAIS.js";import"./step-DlCZnSaC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ba6uCDOF.js";import"./Dot-BGjmzY1b.js";import"./getRadiusAndStrokeWidthFromDot-Dp4xn9Uf.js";import"./useElementOffset-D0ssS32b.js";import"./uniqBy-qMnMoCvD.js";import"./iteratee-C1nM4-Ch.js";import"./Cross-DITT8qNm.js";import"./Sector-VzpKEpAo.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
