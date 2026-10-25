import{R as t}from"./iframe-BpBItmb8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ggvkQSih.js";import{R as l}from"./zIndexSlice-Cjb21_4Z.js";import{C as x}from"./ComposedChart-Cz9o1ftP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BZxiHsTg.js";import{L as a}from"./Line-CYgss46t.js";import{X as c}from"./XAxis-tyIX1Ek0.js";import{T as g}from"./Tooltip-16Wzpvlu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D427CKrx.js";import"./Text-BsqzutiJ.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./pageBackground-Dn3J6qJY.js";import"./isWellBehavedNumber-Q3FqKNV7.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./dataEntryStyles-CqfS8fAi.js";import"./axisSelectors-DhTQuZeq.js";import"./throttle-Cdo2rlHX.js";import"./d3-scale-B2krDzkw.js";import"./CartesianAxis-BCv_yRQ4.js";import"./Layer-DJh0sOtA.js";import"./types-Dpz8_0OY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BaBorYia.js";import"./index-C1AeM7Yu.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./activeStyles-BpJuNb5z.js";import"./useAnimationId-B0lGZ7N8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cc2PuLg6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BOsiS21F.js";import"./tooltipContext-jbEOTzDc.js";import"./RegisterGraphicalItemId-CrKPJKPG.js";import"./ErrorBarContext-Dxg5DLJl.js";import"./SetGraphicalItem-CJwlJ3sC.js";import"./getZIndexFromUnknown-Bm4eECHR.js";import"./useEffectiveDataKey-UghoeVMt.js";import"./omit-z34g81uG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-pkSnYbQi.js";import"./step-CWAoAVng.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DOY_2oPT.js";import"./Dot-DQOKyqZV.js";import"./getRadiusAndStrokeWidthFromDot-BPVDV2Ck.js";import"./useElementOffset-CjCU98kl.js";import"./uniqBy-0vSrRUTV.js";import"./iteratee-BEHFzf7T.js";import"./Cross-CDQrvEQG.js";import"./Sector-Bo0u2rms.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
