import{R as t}from"./iframe-C60CeSr1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BsYuPRXA.js";import{R as l}from"./zIndexSlice-OJv_DQrU.js";import{C as x}from"./ComposedChart-BzAN8QDH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CgnOA4st.js";import{L as a}from"./Line-CMs-Gd4q.js";import{X as c}from"./XAxis-BvEbbPhK.js";import{T as g}from"./Tooltip-4d6bzF4V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D00_RuVZ.js";import"./Text-DbOMyqnY.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./DOMUtils-DGbVIUY3.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZjPHzll.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./throttle-4y-zsF2K.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianAxis-CFb2o3L1.js";import"./Layer-BkafIlY5.js";import"./types-Bt5cyCk_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./AnimatedItems-BorEvTXc.js";import"./useAnimationId-SZ0HilGc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Efiryd3x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./tooltipContext-D0bzrnnA.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getZIndexFromUnknown-CkNexGW1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C7UE_d1E.js";import"./Curve-Dnnwa-VF.js";import"./step-7U-QL9rs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-5H7EYI7d.js";import"./Dot-DqDbCkrn.js";import"./getRadiusAndStrokeWidthFromDot-1touBkwt.js";import"./useElementOffset-da1IKuQA.js";import"./uniqBy-BKlE9h1Q.js";import"./iteratee-C71t-VFG.js";import"./Cross-BzguAgSh.js";import"./Sector-Mj2xoxEK.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
