import{R as t}from"./iframe-Dbaqfuxw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dutac8df.js";import{R as l}from"./zIndexSlice-CcFmF_GZ.js";import{C as x}from"./ComposedChart-CFPXJ_wj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DJDjg_SI.js";import{L as a}from"./Line-BIC9rMP6.js";import{X as c}from"./XAxis-B8p6yjl5.js";import{T as g}from"./Tooltip-CIoI_ZFX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BcEDWRMz.js";import"./Text-Be1RjgkE.js";import"./resolveDefaultProps-xjFLpEsL.js";import"./DOMUtils-CWVgWmzu.js";import"./isWellBehavedNumber-BxE9MI33.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CpQayApT.js";import"./index-A3AcgQ4H.js";import"./index-CQt4Xl-S.js";import"./RechartsWrapper-Dl5FKPzp.js";import"./index-Da5KZnpm.js";import"./index-BrtWnZP9.js";import"./throttle-Y8aMRwU5.js";import"./axisSelectors-BumiVa5e.js";import"./d3-scale-HmOGYUjs.js";import"./renderedTicksSlice-DpL__K8R.js";import"./CartesianAxis-DGjRHc2j.js";import"./Layer-BXzB5K08.js";import"./types-CVDIv1Cb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-60DgJeSx.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BXfYtqIv.js";import"./chartDataContext-4k7YbnXG.js";import"./CategoricalChart-CFxz42EG.js";import"./tooltipContext-ahWnUwoa.js";import"./AnimatedItems-y-MKsCpX.js";import"./useAnimationId-CsoHoZpG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CF0u-T5-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BwZZXBow.js";import"./RegisterGraphicalItemId-BZO7dJhg.js";import"./ErrorBarContext-lpnJ7mOQ.js";import"./GraphicalItemClipPath-r0eQUgnA.js";import"./SetGraphicalItem-D1VXM8vc.js";import"./getZIndexFromUnknown-PJ7vAi-M.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DUUaKj4j.js";import"./Curve-CTO_mN3-.js";import"./step-E3pvPVWS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CymzKczQ.js";import"./Dot-B0ezNCXB.js";import"./getRadiusAndStrokeWidthFromDot-BIpM0DDc.js";import"./useElementOffset-D6a9Gzra.js";import"./uniqBy-C7E9iKzu.js";import"./iteratee-lFXD7-Os.js";import"./Cross-COTFQbMP.js";import"./Sector-B-9CEmPe.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
