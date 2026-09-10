import{R as t}from"./iframe-CZvBVoM1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dm6GJj_u.js";import{R as l}from"./zIndexSlice-BFsaUhqg.js";import{C as x}from"./ComposedChart-CMms7XdW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bg_bwPkp.js";import{L as a}from"./Line-DiOtpcO9.js";import{X as c}from"./XAxis-BwD_71l-.js";import{T as g}from"./Tooltip-D-0A-dub.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CXH4SBDp.js";import"./Text-N_3Dav1R.js";import"./resolveDefaultProps-D-jdsqZa.js";import"./DOMUtils-GcGnpUs3.js";import"./isWellBehavedNumber-DwVpyNCs.js";import"./useId-r81p-TMa.js";import"./useBackwardsCompatibleTheme-CTIdE2S0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9FERMeL.js";import"./index--IdmBhgA.js";import"./index-De4B3ZIK.js";import"./RechartsWrapper-DpE83LkU.js";import"./axisSelectors-DObFO88m.js";import"./throttle-DKdITuKH.js";import"./d3-scale-CYHPrWE0.js";import"./index-B6TkzWSy.js";import"./index-B9F-HAZ2.js";import"./renderedTicksSlice-DZCA8OL1.js";import"./index-WmPIOj3u.js";import"./CartesianAxis-BSKOevSQ.js";import"./Layer-BOzNA3ZR.js";import"./types-SdWXGAN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BODelrhP.js";import"./chartDataContext-DBey5Kyz.js";import"./CategoricalChart-rBPlq3sD.js";import"./AnimatedItems-a9Nj57gp.js";import"./useAnimationId-CmzTxAaG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_nXXHIrs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DBOPu4wl.js";import"./tooltipContext-Cc3UptJA.js";import"./RegisterGraphicalItemId-B0jJiuk8.js";import"./ErrorBarContext-B64_fw23.js";import"./GraphicalItemClipPath-X4UZrOjX.js";import"./SetGraphicalItem-CjJbMcaD.js";import"./getZIndexFromUnknown-e175LfVc.js";import"./useGraphicalItemIdentity-ftydmPqi.js";import"./Curve-CMGEeLJ1.js";import"./step-BaGdmwmz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BlDBLjzI.js";import"./Dot-WxQzlPyE.js";import"./getRadiusAndStrokeWidthFromDot-Cq0DuT0s.js";import"./useElementOffset-CrJNpn31.js";import"./uniqBy-DE6IhfWE.js";import"./iteratee-qUhlXCDP.js";import"./Cross-BUCtaLji.js";import"./Sector-DC6oeHZi.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
