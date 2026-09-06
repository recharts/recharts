import{R as t}from"./iframe-DVVgwXG1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DTftp1IZ.js";import{R as l}from"./zIndexSlice-Cy6ToStD.js";import{C as x}from"./ComposedChart-CyvTvZ7f.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CniBJf7W.js";import{L as a}from"./Line-Dv1peWnP.js";import{X as c}from"./XAxis-Bz_enE-E.js";import{T as g}from"./Tooltip-Dhv5pcLX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bq1dbdZA.js";import"./Text-x0LSajbz.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./DOMUtils-Dl_vO6wQ.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./throttle-3PkmjBJ2.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./CartesianAxis-CMSfRSGS.js";import"./Layer-DfoKGH6M.js";import"./types-6aOyMGka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./AnimatedItems-DCmrT7i2.js";import"./useAnimationId-BGsmQL0f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWI-Pcd6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CF_ghEpm.js";import"./tooltipContext-B_Ip8Zvn.js";import"./RegisterGraphicalItemId-BsgFzShu.js";import"./ErrorBarContext-xcvO8XZX.js";import"./GraphicalItemClipPath-CPFvU9dM.js";import"./SetGraphicalItem-BChXMtyH.js";import"./getZIndexFromUnknown-D84Eb0en.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BgK3GuXn.js";import"./Curve-BxDoFciw.js";import"./step-Bxv9TeT5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DdjhNQkF.js";import"./Dot-CtGJ8Abr.js";import"./getRadiusAndStrokeWidthFromDot-Bf7z58lw.js";import"./useElementOffset-CF8eY8PS.js";import"./uniqBy-Cnk7JbTd.js";import"./iteratee-v6TgR0jc.js";import"./Cross-eyZEeMOV.js";import"./Sector-CHSwlFcl.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
