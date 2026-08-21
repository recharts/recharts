import{R as t}from"./iframe-CZFgSFnm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DRz0mmf0.js";import{R as l}from"./zIndexSlice-CTISp4tv.js";import{C as x}from"./ComposedChart-DvkJAhLc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DZaL7tcL.js";import{L as a}from"./Line-CA3HAZ8y.js";import{X as c}from"./XAxis-BfXelSpG.js";import{T as g}from"./Tooltip-Co9qJeVv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMeQeDmk.js";import"./Text-Dna8Rnzv.js";import"./resolveDefaultProps-e55Twtbt.js";import"./DOMUtils-Ba5sbmYY.js";import"./isWellBehavedNumber-DUdaibLy.js";import"./useId-C0SVDnoD.js";import"./useBackwardsCompatibleTheme-xKYPlRvL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Xe1tLTY7.js";import"./index-DX3tFi2I.js";import"./index-BJs7iDzc.js";import"./RechartsWrapper-DvRLJ5Qk.js";import"./index-DYK-T1Xx.js";import"./index-CW1iMe2m.js";import"./throttle-DrSRHMPG.js";import"./axisSelectors-LF1AULtu.js";import"./d3-scale-Brc85VvE.js";import"./renderedTicksSlice-D-MBTj4C.js";import"./CartesianAxis-XGvO_fDW.js";import"./Layer-C6R-wMgD.js";import"./types-C_Z_MS2b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-PmCypDgu.js";import"./chartDataContext-CvAeifx3.js";import"./CategoricalChart-dvJV-_Rh.js";import"./AnimatedItems-DmVERa1o.js";import"./useAnimationId-DM0V1ULk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DaKn8iZV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWrsW3HO.js";import"./tooltipContext-BgAiZbQ8.js";import"./RegisterGraphicalItemId-CA2MokDU.js";import"./ErrorBarContext-BupfeAir.js";import"./GraphicalItemClipPath-BA_NbQWw.js";import"./SetGraphicalItem-DBiVF70L.js";import"./getZIndexFromUnknown-64ilhjqn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DlwaWh21.js";import"./Curve-BnTjqqkL.js";import"./step-CY8jqLlm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B418SJ-y.js";import"./Dot-CWSN_a_c.js";import"./getRadiusAndStrokeWidthFromDot-195plUkS.js";import"./useElementOffset-Dvg0rJ3O.js";import"./uniqBy-CbHkWAW5.js";import"./iteratee-BfOUB73k.js";import"./Cross-kBllAEvX.js";import"./Sector-Dy81bP9C.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
