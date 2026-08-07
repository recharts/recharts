import{R as t}from"./iframe-CWxtgXuN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BwANZfYx.js";import{R as l}from"./zIndexSlice-DuNjPOIA.js";import{C as x}from"./ComposedChart-CHLSjXfe.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bx-OnJSc.js";import{L as a}from"./Line-CEqOTKT-.js";import{X as c}from"./XAxis-BIy0Ixfj.js";import{T as g}from"./Tooltip-DuwqObOg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B4Vj6wwG.js";import"./Text-Bzp-NWLm.js";import"./resolveDefaultProps-DB57oDCz.js";import"./DOMUtils-B_ZEHGfF.js";import"./isWellBehavedNumber-RhnC_be2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlQF_3Y8.js";import"./index-D3Okail2.js";import"./index-Co2hlbGQ.js";import"./RechartsWrapper-cC4MiwtJ.js";import"./index-ClfrRk61.js";import"./index-Cgh7W-Sw.js";import"./throttle-DySWaKHI.js";import"./axisSelectors-D3U5jtqo.js";import"./d3-scale-PJ0eA6WB.js";import"./renderedTicksSlice-DdR3Yk66.js";import"./CartesianAxis-Bg_4zGXW.js";import"./Layer-DvshJojd.js";import"./types-CUZin1-8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DQSpDGj3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-VS3m0tpN.js";import"./chartDataContext-BzVtDYqK.js";import"./CategoricalChart-CDL51AOI.js";import"./tooltipContext-AzgxhFkw.js";import"./AnimatedItems-xrLxeBUX.js";import"./useAnimationId-N7_T0mrz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaSYnlz4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHtnvTAF.js";import"./RegisterGraphicalItemId-DrgIbtZo.js";import"./ErrorBarContext-CAu46fWB.js";import"./GraphicalItemClipPath-C5JLsR_L.js";import"./SetGraphicalItem-DN47EjfQ.js";import"./getZIndexFromUnknown-ji4hQVSt.js";import"./graphicalItemSelectors-CE4_kVFF.js";import"./Curve-D2bA3Qsr.js";import"./step-FW_ylVPK.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BZ5j9Isf.js";import"./Dot-BmDNDKDS.js";import"./graphicalItemIdentity-CLct0io8.js";import"./useElementOffset-ClfhZWor.js";import"./uniqBy-lHl2ZxXA.js";import"./iteratee-D8MGVHsu.js";import"./Cross-CyJKj4w1.js";import"./Sector-wFNpFLbq.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
