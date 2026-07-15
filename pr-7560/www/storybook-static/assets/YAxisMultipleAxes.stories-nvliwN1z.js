import{R as t}from"./iframe-ClcrwGuW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-XJItrttK.js";import{R as l}from"./zIndexSlice-BIGnlmU8.js";import{C as x}from"./ComposedChart-QFp2QUo8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DyiIlEkb.js";import{L as a}from"./Line-A183MaDD.js";import{X as c}from"./XAxis-DBark8Vy.js";import{T as g}from"./Tooltip-CHjDpm_C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-ByEdCDio.js";import"./Layer-3ZpdhJcS.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./Label-Dq1bNHIu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ktmCEwYK.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./types-BTRTN-qV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./throttle-CCS8xgZt.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./tooltipContext-CGOErNQb.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./useAnimationId-Dr2V8ESg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BnksOpBX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getZIndexFromUnknown-abdcZcSw.js";import"./graphicalItemSelectors-DJzLZ4Ei.js";import"./Curve-CrblFnpJ.js";import"./step-Kzlz86Dk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./useElementOffset-0hht_3Y4.js";import"./uniqBy-BWkjWHs1.js";import"./iteratee-D67nRlPy.js";import"./Cross-2z9sFD4c.js";import"./Sector-DEtGgNIy.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
