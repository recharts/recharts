import{R as t}from"./iframe-uEKx9k1N.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-tAwATeqy.js";import{R as l}from"./zIndexSlice-DY2SAwlF.js";import{C as x}from"./ComposedChart-wuX6tP4V.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CNeWqAkg.js";import{L as a}from"./Line-BSIz3Wv8.js";import{X as c}from"./XAxis-DqNwoQQz.js";import{T as g}from"./Tooltip-BmPyy6Ks.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-StFKOZ7o.js";import"./Layer-BH5XLyL8.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./isWellBehavedNumber-DQ4HTAG3.js";import"./Label-CitoXnqP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ClIbinrc.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./types-BnkDZvgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DY-iZALX.js";import"./throttle-BszORo1S.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./axisSelectors-w7ZWZmhc.js";import"./d3-scale-CoMxsikp.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./tooltipContext-BZw_0Eaq.js";import"./AnimatedItems-B35P9OvY.js";import"./useAnimationId-ZeyHjL0b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9Jy7qhLH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BahjRs48.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./ErrorBarContext-YXBGRjgp.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getZIndexFromUnknown-wx0mmxl8.js";import"./graphicalItemSelectors-BRveUiGI.js";import"./Curve-DneOA6Ls.js";import"./step-F10w8TN4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BymWNzxJ.js";import"./Dot-F2Exn6rv.js";import"./getRadiusAndStrokeWidthFromDot-DTQnNiya.js";import"./useElementOffset-Sr2wxqk0.js";import"./uniqBy-CM6A5tFB.js";import"./iteratee-C_fPFM1j.js";import"./Cross-HkOkxvvA.js";import"./Sector-CRwdZ_1k.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
