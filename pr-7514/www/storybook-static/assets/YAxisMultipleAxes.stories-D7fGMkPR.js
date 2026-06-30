import{R as t}from"./iframe-DJHXlrGw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BulSHvtc.js";import{R as l}from"./zIndexSlice-CFaJnUYw.js";import{C as x}from"./ComposedChart-c9TgP79T.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BFP9b6cK.js";import{L as a}from"./Line-B15qEuth.js";import{X as c}from"./XAxis-Bazc91VB.js";import{T as g}from"./Tooltip-MtmhfVvh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-j_9LvNGC.js";import"./CartesianAxis-CkFZLbcD.js";import"./Layer-DZpjcI0F.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./Label-R2VOv6mw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-KkfMfF_A.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./types-vAWUzS0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./throttle-DAd10cPx.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./tooltipContext-C3r2TNgA.js";import"./AnimatedItems-BgKM4093.js";import"./useAnimationId-CR2wKsf0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Z1GABkaC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./ErrorBarContext-DLSy_XzC.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getZIndexFromUnknown-DGvsYVYA.js";import"./graphicalItemSelectors-DekV_TLp.js";import"./Curve-Dw1fPQvk.js";import"./step-vGwa_xXj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ChuwA-C_.js";import"./Dot-C_JeniDT.js";import"./getRadiusAndStrokeWidthFromDot-WrvxTCng.js";import"./useElementOffset-CFTv--jx.js";import"./uniqBy-BVl6QLa6.js";import"./iteratee-BhdXRguK.js";import"./Cross-kJELHEFE.js";import"./Sector-BLgFTjIx.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
