import{R as e}from"./iframe-C8vQGZXk.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CeEiPhih.js";import{R as h}from"./zIndexSlice-ByprO6Sm.js";import{C as g}from"./ComposedChart-CHNyRbuw.js";import{L as x}from"./Line-ysek8YuF.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CtBXoG-U.js";import{T as V}from"./Tooltip-BFXXitgf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C_7-gYtt.js";import"./Layer-sgegzG2x.js";import"./resolveDefaultProps-V67edAdk.js";import"./Text-4tQX4Uia.js";import"./DOMUtils-CYXp4dKG.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./Label-CYWEtH1_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTaI93aT.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./types-Cx0FcaGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsrGsPip.js";import"./throttle-h__ZU4m4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./axisSelectors-QRAfsrXG.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./CategoricalChart-3d5zHnsL.js";import"./Curve-BHwHIA5E.js";import"./step-BEmml1DS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-v0KEsWrQ.js";import"./useAnimationId-CCh5p5CL.js";import"./ActivePoints-DpUGItzr.js";import"./Dot-D-cyWkmh.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./ErrorBarContext-BpNPFGVG.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getRadiusAndStrokeWidthFromDot-CYNakwFb.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-D676kBYp.js";import"./uniqBy-CNeAHYAw.js";import"./iteratee-BgpO85yG.js";import"./Cross-CXjzHFBx.js";import"./Rectangle-De7ejmNi.js";import"./util-Dxo8gN5i.js";import"./Sector-BX1OUJvA.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
