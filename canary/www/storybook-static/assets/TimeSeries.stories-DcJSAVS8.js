import{R as e}from"./iframe-qeJRbQC_.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-u_1Q5fGR.js";import{R as h}from"./zIndexSlice-7202Aouk.js";import{C as g}from"./ComposedChart-CxuV2NoV.js";import{L as x}from"./Line-gjOGxWIr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DPqZAioL.js";import{T as V}from"./Tooltip-CuTJR1uK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BByvFPIV.js";import"./Layer-DnfYbRaC.js";import"./resolveDefaultProps-DeRAgm8x.js";import"./Text-CGxsVVX7.js";import"./DOMUtils-DzJTCa9O.js";import"./isWellBehavedNumber-CEbP45d6.js";import"./useId-BP7tb9fo.js";import"./useBackwardsCompatibleTheme-DmTHavmp.js";import"./Label-IJrwe4z6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8LlaNHN.js";import"./index-BD72gC8i.js";import"./index-DyUeFg7T.js";import"./types-CQ8TW7B4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMyK9gC5.js";import"./throttle-Bm7TlndJ.js";import"./index-DfrLYgMZ.js";import"./index-COOVNst_.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CI86w_cv.js";import"./axisSelectors-D3Tk6yw2.js";import"./index-BOsshKUN.js";import"./CartesianChart-D9mK1Hr2.js";import"./chartDataContext-BPJsRsvJ.js";import"./CategoricalChart-DXUZLIpB.js";import"./Curve-u1NUazY3.js";import"./step-m8FbBLvj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ba5qFTnf.js";import"./useAnimationId-Dc0yoLfA.js";import"./ActivePoints-zmt_Feef.js";import"./Dot-BTyyD634.js";import"./RegisterGraphicalItemId-C6fN5b4g.js";import"./ErrorBarContext-Brj2ZIP_.js";import"./GraphicalItemClipPath-wv7NC4zW.js";import"./SetGraphicalItem-BpzaqcDs.js";import"./getRadiusAndStrokeWidthFromDot-8Ne4VOFo.js";import"./ActiveShapeUtils-DKEMCySD.js";import"./useGraphicalItemIdentity-DtcgFGn-.js";import"./useElementOffset-BPB7gh4S.js";import"./uniqBy-BXrH7P8U.js";import"./iteratee-Dnr_1A58.js";import"./Cross-BBTxzZop.js";import"./Rectangle-CVQykKnP.js";import"./util-Dxo8gN5i.js";import"./Sector-n_zpCIAF.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
