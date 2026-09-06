import{R as e}from"./iframe-DVVgwXG1.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bz_enE-E.js";import{R as h}from"./zIndexSlice-Cy6ToStD.js";import{C as g}from"./ComposedChart-CyvTvZ7f.js";import{L as x}from"./Line-Dv1peWnP.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DTJLq2d9.js";import{T as V}from"./Tooltip-Dhv5pcLX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CMSfRSGS.js";import"./Layer-DfoKGH6M.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./Text-x0LSajbz.js";import"./DOMUtils-Dl_vO6wQ.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./Label-Bq1dbdZA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./types-6aOyMGka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CfmunlkM.js";import"./throttle-3PkmjBJ2.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./index-BybtA4IG.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./Curve-BxDoFciw.js";import"./step-Bxv9TeT5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DCmrT7i2.js";import"./useAnimationId-BGsmQL0f.js";import"./ActivePoints-DdjhNQkF.js";import"./Dot-CtGJ8Abr.js";import"./RegisterGraphicalItemId-BsgFzShu.js";import"./ErrorBarContext-xcvO8XZX.js";import"./GraphicalItemClipPath-CPFvU9dM.js";import"./SetGraphicalItem-BChXMtyH.js";import"./getRadiusAndStrokeWidthFromDot-Bf7z58lw.js";import"./ActiveShapeUtils-CF_ghEpm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CF8eY8PS.js";import"./uniqBy-Cnk7JbTd.js";import"./iteratee-v6TgR0jc.js";import"./Cross-eyZEeMOV.js";import"./Rectangle-CWI-Pcd6.js";import"./util-Dxo8gN5i.js";import"./Sector-CHSwlFcl.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
