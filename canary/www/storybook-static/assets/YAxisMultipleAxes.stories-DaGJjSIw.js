import{R as t}from"./iframe-D7QPEs6x.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-5bCl6v45.js";import{R as l}from"./zIndexSlice-DRJU9auo.js";import{C as x}from"./ComposedChart-DkVpVicC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BUie-6je.js";import{L as a}from"./Line-FIUtuiWQ.js";import{X as c}from"./XAxis-CddzMe5D.js";import{T as g}from"./Tooltip-Cfw1HHY8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dw5oZdmX.js";import"./Text-DA3gX1pv.js";import"./resolveDefaultProps-CRWlv-3y.js";import"./DOMUtils-D_tBKlm6.js";import"./isWellBehavedNumber-DNiV3oks.js";import"./useId-BXkxS-9S.js";import"./useBackwardsCompatibleTheme-D_0RgBTV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BteXgmwI.js";import"./index-CJHqU6XL.js";import"./index-JZUC8P_o.js";import"./RechartsWrapper-i3bpT-Yu.js";import"./axisSelectors-ApgCgdVz.js";import"./throttle-Ct4NpkHt.js";import"./d3-scale-BExrlGPv.js";import"./index-BMjjiw1C.js";import"./index-DHFQnlSZ.js";import"./renderedTicksSlice-laAQTg1Q.js";import"./index-wtCc4zD7.js";import"./CartesianAxis-BAfU-RT3.js";import"./Layer-CQuTPpTF.js";import"./types-2ZxaQrL7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C9MabHj3.js";import"./chartDataContext-B6RxQWBJ.js";import"./CategoricalChart-vhkNV8Yp.js";import"./AnimatedItems-bKH57gE_.js";import"./useAnimationId-1a47Z03A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIfEIhEu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfpd-TE6.js";import"./tooltipContext-B7tmfZyH.js";import"./RegisterGraphicalItemId-DcoGQHKz.js";import"./ErrorBarContext-DMXrIZhk.js";import"./GraphicalItemClipPath-BnEsc6E8.js";import"./SetGraphicalItem-Bur606vr.js";import"./getZIndexFromUnknown-Da8hs9xC.js";import"./useGraphicalItemIdentity-Dd9FM8V7.js";import"./dataEntryStyles-BtWpvhbj.js";import"./Curve-OPF6_FYd.js";import"./step-DBHgW2xP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BIlb1Vnm.js";import"./Dot-BIHN86sB.js";import"./getRadiusAndStrokeWidthFromDot-4ipQIWUZ.js";import"./useElementOffset-utW7Y3fN.js";import"./uniqBy-LJLi2f6l.js";import"./iteratee-BozjXSbi.js";import"./Cross-CQQ3xt02.js";import"./Sector-C4mywg2Y.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
